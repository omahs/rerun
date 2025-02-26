// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/boxes3d.fbs".

#pragma once

#include "../component_batch.hpp"
#include "../component_batch_adapter_builtins.hpp"
#include "../components/class_id.hpp"
#include "../components/color.hpp"
#include "../components/half_sizes3d.hpp"
#include "../components/instance_key.hpp"
#include "../components/position3d.hpp"
#include "../components/radius.hpp"
#include "../components/rotation3d.hpp"
#include "../components/text.hpp"
#include "../data_cell.hpp"
#include "../indicator_component.hpp"
#include "../result.hpp"
#include "../util.hpp"

#include <cstdint>
#include <optional>
#include <utility>
#include <vector>

namespace rerun {
    namespace archetypes {
        /// **Archetype**: 3D boxes with half-extents and optional center, rotations, rotations, colors etc.
        ///
        /// ## Example
        ///
        /// ### Batch of 3D boxes
        /// ```cpp,ignore
        /// #include <rerun.hpp>
        ///
        /// int main() {
        ///     auto rec = rerun::RecordingStream("rerun_example_box3d_batch");
        ///     rec.spawn().throw_on_failure();
        ///
        ///     rec.log(
        ///         "batch",
        ///         rerun::Boxes3D::from_centers_and_half_sizes(
        ///             {{2.0f, 0.0f, 0.0f}, {-2.0f, 0.0f, 0.0f}, {0.0f, 0.0f, 2.0f}},
        ///             {{2.0f, 2.0f, 1.0f}, {1.0f, 1.0f, 0.5f}, {2.0f, 0.5f, 1.0f}}
        ///         )
        ///             .with_rotations({
        ///                 rerun::Quaternion::IDENTITY,
        ///                 // 45 degrees around Z
        ///                 rerun::Quaternion::from_xyzw(0.0f, 0.0f, 0.382683f, 0.923880f),
        ///                 rerun::RotationAxisAngle({0.0f, 1.0f, 0.0f}, rerun::Angle::degrees(30.0f)),
        ///             })
        ///             .with_radii({0.025f})
        ///             .with_colors({
        ///                 rerun::Rgba32(255, 0, 0),
        ///                 rerun::Rgba32(0, 255, 0),
        ///                 rerun::Rgba32(0, 0, 255),
        ///             })
        ///             .with_labels({"red", "green", "blue"})
        ///     );
        /// }
        /// ```
        struct Boxes3D {
            /// All half-extents that make up the batch of boxes.
            ComponentBatch<rerun::components::HalfSizes3D> half_sizes;

            /// Optional center positions of the boxes.
            std::optional<ComponentBatch<rerun::components::Position3D>> centers;

            std::optional<ComponentBatch<rerun::components::Rotation3D>> rotations;

            /// Optional colors for the boxes.
            std::optional<ComponentBatch<rerun::components::Color>> colors;

            /// Optional radii for the lines that make up the boxes.
            std::optional<ComponentBatch<rerun::components::Radius>> radii;

            /// Optional text labels for the boxes.
            std::optional<ComponentBatch<rerun::components::Text>> labels;

            /// Optional `ClassId`s for the boxes.
            ///
            /// The class ID provides colors and labels if not specified explicitly.
            std::optional<ComponentBatch<rerun::components::ClassId>> class_ids;

            /// Unique identifiers for each individual boxes in the batch.
            std::optional<ComponentBatch<rerun::components::InstanceKey>> instance_keys;

            /// Name of the indicator component, used to identify the archetype when converting to a list of components.
            static const char INDICATOR_COMPONENT_NAME[];
            /// Indicator component, used to identify the archetype when converting to a list of components.
            using IndicatorComponent = components::IndicatorComponent<INDICATOR_COMPONENT_NAME>;

          public:
            // Extensions to generated type defined in 'boxes3d_ext.cpp'

            /// Creates new `Boxes3D` with `half_sizes` centered around the local origin.
            static Boxes3D from_half_sizes(ComponentBatch<components::HalfSizes3D> half_sizes) {
                Boxes3D boxes;
                boxes.half_sizes = std::move(half_sizes);
                return boxes;
            }

            /// Creates new `Boxes3D` with `centers` and `half_sizes`.
            static Boxes3D from_centers_and_half_sizes(
                ComponentBatch<components::Position3D> centers,
                ComponentBatch<components::HalfSizes3D> half_sizes
            ) {
                Boxes3D boxes;
                boxes.half_sizes = std::move(half_sizes);
                boxes.centers = std::move(centers);
                return boxes;
            }

            /// Creates new `Boxes3D` with `half_sizes` created from (full) sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates half-sizes from the
            /// input data.
            /// TODO(#3794): This should not take an std::vector.
            static Boxes3D from_sizes(const std::vector<datatypes::Vec3D>& sizes);

            /// Creates new `Boxes3D` with `centers` and `half_sizes` created from centers and (full)
            /// sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates centers and half-sizes
            /// from the input data.
            /// TODO(#3794): This should not take an std::vector.
            static Boxes3D from_centers_and_sizes(
                ComponentBatch<components::Position3D> centers,
                const std::vector<datatypes::Vec3D>& sizes
            ) {
                Boxes3D boxes = from_sizes(std::move(sizes));
                boxes.centers = std::move(centers);
                return boxes;
            }

            /// Creates new `Boxes3D` with `half_sizes` and `centers` created from minimums and (full)
            /// sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates centers and half-sizes
            /// from the input data.
            /// TODO(#3794): This should not take an std::vector.
            static Boxes3D from_mins_and_sizes(
                const std::vector<datatypes::Vec3D>& mins,
                const std::vector<datatypes::Vec3D>& sizes
            );

          public:
            Boxes3D() = default;
            Boxes3D(Boxes3D&& other) = default;

            /// Optional center positions of the boxes.
            Boxes3D with_centers(ComponentBatch<rerun::components::Position3D> _centers) && {
                centers = std::move(_centers);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            Boxes3D with_rotations(ComponentBatch<rerun::components::Rotation3D> _rotations) && {
                rotations = std::move(_rotations);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional colors for the boxes.
            Boxes3D with_colors(ComponentBatch<rerun::components::Color> _colors) && {
                colors = std::move(_colors);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional radii for the lines that make up the boxes.
            Boxes3D with_radii(ComponentBatch<rerun::components::Radius> _radii) && {
                radii = std::move(_radii);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional text labels for the boxes.
            Boxes3D with_labels(ComponentBatch<rerun::components::Text> _labels) && {
                labels = std::move(_labels);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional `ClassId`s for the boxes.
            ///
            /// The class ID provides colors and labels if not specified explicitly.
            Boxes3D with_class_ids(ComponentBatch<rerun::components::ClassId> _class_ids) && {
                class_ids = std::move(_class_ids);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Unique identifiers for each individual boxes in the batch.
            Boxes3D with_instance_keys(ComponentBatch<rerun::components::InstanceKey> _instance_keys
            ) && {
                instance_keys = std::move(_instance_keys);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Returns the number of primary instances of this archetype.
            size_t num_instances() const {
                return half_sizes.size();
            }
        };

    } // namespace archetypes

    template <typename T>
    struct AsComponents;

    template <>
    struct AsComponents<archetypes::Boxes3D> {
        /// Serialize all set component batches.
        static Result<std::vector<SerializedComponentBatch>> serialize(
            const archetypes::Boxes3D& archetype
        );
    };
} // namespace rerun
