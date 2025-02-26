//! The Rerun logging SDK
//!
//! This is the bare-bones version of the [`rerun`](https://docs.rs/rerun/) crate.
//! `rerun` exports everything in `re_sdk`, so in most cases you want to use `rerun`
//! instead.
//!
//! Please read [the docs for the `rerun` crate](https://docs.rs/rerun/) instead.
//!
//! ## Feature flags
#![doc = document_features::document_features!()]
//!

#![warn(missing_docs)] // Let's keep the this crate well-documented!

// ----------------
// Private modules:

mod global;
mod log_sink;
mod recording_stream;
mod spawn;

#[cfg(feature = "log")]
mod log_integration;

// -------------
// Public items:

pub use spawn::{spawn, SpawnError, SpawnOptions};

pub use self::recording_stream::{
    RecordingStream, RecordingStreamBuilder, RecordingStreamError, RecordingStreamResult,
};

pub use re_sdk_comms::{default_flush_timeout, default_server_addr};

pub use re_log_types::{ApplicationId, EntityPath, StoreId, StoreKind};

pub use global::cleanup_if_forked_child;

#[cfg(not(target_arch = "wasm32"))]
impl crate::sink::LogSink for re_log_encoding::FileSink {
    fn send(&self, msg: re_log_types::LogMsg) {
        re_log_encoding::FileSink::send(self, msg);
    }

    #[inline]
    fn flush_blocking(&self) {
        re_log_encoding::FileSink::flush_blocking(self);
    }
}

// ---------------
// Public modules:

#[cfg(feature = "demo")]
pub mod demo_util;

/// Different destinations for log messages.
///
/// This is how you select whether the log stream ends up
/// sent over TCP, written to file, etc.
pub mod sink {
    pub use crate::log_sink::{BufferedSink, LogSink, MemorySink, MemorySinkStorage, TcpSink};

    #[cfg(not(target_arch = "wasm32"))]
    pub use re_log_encoding::{FileSink, FileSinkError};
}

/// Things directly related to logging.
pub mod log {
    pub use re_log_types::{
        DataCell, DataRow, DataTable, DataTableBatcher, DataTableBatcherConfig, LogMsg, PathOp,
        RowId, TableId,
    };
}

/// Time-related types.
pub mod time {
    pub use re_log_types::{Time, TimeInt, TimePoint, TimeType, Timeline};
}

/// Transform helpers, for use with [`components::Transform3D`].
pub mod transform {
    pub use re_types::datatypes::{
        Angle, Rotation3D, RotationAxisAngle, Scale3D, Transform3D, TranslationAndMat3x3,
        TranslationRotationScale3D,
    };
}

/// Coordinate system helpers, for use with [`components::ViewCoordinates`].
pub mod coordinates {
    pub use re_types::view_coordinates::{Axis3, Handedness, Sign, SignedAxis3};
}

pub use re_types::{archetypes, components, datatypes};
pub use re_types_core::{
    Archetype, ArchetypeName, AsComponents, Component, ComponentBatch, ComponentName, Datatype,
    DatatypeBatch, DatatypeName, GenericIndicatorComponent, Loggable, LoggableBatch,
    MaybeOwnedComponentBatch, NamedIndicatorComponent,
};

mod prelude {
    // Import all archetypes into the global namespace to minimize
    // the amount of typing for our users.
    pub use super::archetypes::*;

    // Also import any component or datatype that has a unique name:
    pub use super::components::{
        Color, HalfSizes2D, HalfSizes3D, InstanceKey, LineStrip2D, LineStrip3D, Material,
        MediaType, MeshProperties, OutOfTreeTransform3D, Position2D, Position3D, Radius, Text,
        TextLogLevel, Vector3D,
    };
    pub use super::datatypes::{
        Angle, ClassDescription, Float32, KeypointPair, Mat3x3, Quaternion, Rgba32, Rotation3D,
        RotationAxisAngle, Scale3D, TranslationAndMat3x3, TranslationRotationScale3D, Vec2D, Vec3D,
        Vec4D,
    };

    pub use super::time::{Time, TimePoint, Timeline};
}
pub use prelude::*;

#[cfg(feature = "log")]
pub use self::log_integration::Logger;
#[cfg(feature = "log")]
pub use re_log::default_log_filter;

/// Methods for spawning the web viewer and streaming the SDK log stream to it.
#[cfg(feature = "web_viewer")]
pub mod web_viewer;

/// Re-exports of other crates.
pub mod external {
    pub use re_log;
    pub use re_log_types;
    pub use re_memory;
    pub use re_sdk_comms;
    pub use re_types;

    pub use re_log::external::*;
    pub use re_log_types::external::*;
    pub use re_types::external::*;

    #[cfg(feature = "log")]
    pub use log;
}

// -----
// Misc:

/// The version of the Rerun SDK.
pub fn build_info() -> re_build_info::BuildInfo {
    re_build_info::build_info!()
}

const RERUN_ENV_VAR: &str = "RERUN";

/// Helper to get the value of the `RERUN` environment variable.
fn get_rerun_env() -> Option<bool> {
    std::env::var(RERUN_ENV_VAR)
        .ok()
        .and_then(|s| match s.to_lowercase().as_str() {
            "0" | "false" | "off" => Some(false),
            "1" | "true" | "on" => Some(true),
            _ => {
                re_log::warn!(
                    "Invalid value for environment variable {RERUN_ENV_VAR}={s:?}. Expected 'on' or 'off'. It will be ignored"
                );
                None
            }
        })
}

/// Checks the `RERUN` environment variable. If not found, returns the argument.
///
/// Also adds some helpful logging.
pub fn decide_logging_enabled(default_enabled: bool) -> bool {
    // We use `info_once` so that we can call this function
    // multiple times without spamming the log.
    match get_rerun_env() {
        Some(true) => {
            re_log::info_once!(
                "Rerun Logging is enabled by the '{RERUN_ENV_VAR}' environment variable."
            );
            true
        }
        Some(false) => {
            re_log::info_once!(
                "Rerun Logging is disabled by the '{RERUN_ENV_VAR}' environment variable."
            );
            false
        }
        None => {
            if !default_enabled {
                re_log::info_once!(
                    "Rerun Logging has been disabled. Turn it on with the '{RERUN_ENV_VAR}' environment variable."
                );
            }
            default_enabled
        }
    }
}

// ----------------------------------------------------------------------------

/// Creates a new [`re_log_types::StoreInfo`] which can be used with [`RecordingStream::new`].
#[track_caller] // track_caller so that we can see if we are being called from an official example.
pub fn new_store_info(
    application_id: impl Into<re_log_types::ApplicationId>,
) -> re_log_types::StoreInfo {
    re_log_types::StoreInfo {
        application_id: application_id.into(),
        store_id: StoreId::random(StoreKind::Recording),
        is_official_example: called_from_official_rust_example(),
        started: re_log_types::Time::now(),
        store_source: re_log_types::StoreSource::RustSdk {
            rustc_version: env!("RE_BUILD_RUSTC_VERSION").into(),
            llvm_version: env!("RE_BUILD_LLVM_VERSION").into(),
        },
        store_kind: re_log_types::StoreKind::Recording,
    }
}

#[track_caller]
fn called_from_official_rust_example() -> bool {
    // The sentinel file we use to identify the official examples directory.
    const SENTINEL_FILENAME: &str = ".rerun_examples";
    let caller = core::panic::Location::caller();
    let mut path = std::path::PathBuf::from(caller.file());
    let mut is_official_example = false;
    for _ in 0..4 {
        path.pop(); // first iteration is always a file path in our examples
        if path.join(SENTINEL_FILENAME).exists() {
            is_official_example = true;
        }
    }
    is_official_example
}
