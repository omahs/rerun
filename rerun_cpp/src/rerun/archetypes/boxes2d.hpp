// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/boxes2d.fbs".

#pragma once

#include "../component_batch.hpp"
#include "../component_batch_adapter_builtins.hpp"
#include "../components/class_id.hpp"
#include "../components/color.hpp"
#include "../components/draw_order.hpp"
#include "../components/half_sizes2d.hpp"
#include "../components/instance_key.hpp"
#include "../components/position2d.hpp"
#include "../components/radius.hpp"
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
        /// **Archetype**: 2D boxes with half-extents and optional center, rotations, rotations, colors etc.
        ///
        /// ## Example
        ///
        /// ### Simple 2D boxes
        /// ```cpp,ignore
        /// #include <rerun.hpp>
        ///
        /// int main() {
        ///     auto rec = rerun::RecordingStream("rerun_example_box2d");
        ///     rec.spawn().throw_on_failure();
        ///
        ///     rec.log("simple", rerun::Boxes2D::from_mins_and_sizes({{-1.f, -1.f}}, {{2.f, 2.f}}));
        ///
        ///     // Log an extra rect to set the view bounds
        ///     rec.log("bounds", rerun::Boxes2D::from_sizes({{4.f, 3.f}}));
        /// }
        /// ```
        struct Boxes2D {
            /// All half-extents that make up the batch of boxes.
            ComponentBatch<rerun::components::HalfSizes2D> half_sizes;

            /// Optional center positions of the boxes.
            std::optional<ComponentBatch<rerun::components::Position2D>> centers;

            /// Optional colors for the boxes.
            std::optional<ComponentBatch<rerun::components::Color>> colors;

            /// Optional radii for the lines that make up the boxes.
            std::optional<ComponentBatch<rerun::components::Radius>> radii;

            /// Optional text labels for the boxes.
            std::optional<ComponentBatch<rerun::components::Text>> labels;

            /// An optional floating point value that specifies the 2D drawing order.
            ///
            /// Objects with higher values are drawn on top of those with lower values.
            ///
            /// The default for 2D boxes is 10.0.
            std::optional<rerun::components::DrawOrder> draw_order;

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
            // Extensions to generated type defined in 'boxes2d_ext.cpp'

            /// Creates new `Boxes2D` with `half_sizes` centered around the local origin.
            static Boxes2D from_half_sizes(ComponentBatch<components::HalfSizes2D> half_sizes) {
                Boxes2D boxes;
                boxes.half_sizes = std::move(half_sizes);
                return boxes;
            }

            /// Creates new `Boxes2D` with `centers` and `half_sizes`.
            static Boxes2D from_centers_and_half_sizes(
                ComponentBatch<components::Position2D> centers,
                ComponentBatch<components::HalfSizes2D> half_sizes
            ) {
                Boxes2D boxes;
                boxes.half_sizes = std::move(half_sizes);
                boxes.centers = std::move(centers);
                return boxes;
            }

            /// Creates new `Boxes2D` with `half_sizes` created from (full) sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates half-sizes from the
            /// input data.
            static Boxes2D from_sizes(const std::vector<datatypes::Vec2D>& sizes);

            /// Creates new `Boxes2D` with `centers` and `half_sizes` created from centers and (full)
            /// sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates centers and half-sizes
            /// from the input data.
            static Boxes2D from_centers_and_sizes(
                ComponentBatch<components::Position2D> centers,
                const std::vector<datatypes::Vec2D>& sizes
            ) {
                Boxes2D boxes = from_sizes(std::move(sizes));
                boxes.centers = std::move(centers);
                return boxes;
            }

            /// Creates new `Boxes2D` with `half_sizes` and `centers` created from minimums and (full)
            /// sizes.
            ///
            /// TODO(#3285): Does *not* preserve data as-is and instead creates centers and half-sizes
            /// from the input data.
            static Boxes2D from_mins_and_sizes(
                const std::vector<datatypes::Vec2D>& mins,
                const std::vector<datatypes::Vec2D>& sizes
            );

          public:
            Boxes2D() = default;
            Boxes2D(Boxes2D&& other) = default;

            /// Optional center positions of the boxes.
            Boxes2D with_centers(ComponentBatch<rerun::components::Position2D> _centers) && {
                centers = std::move(_centers);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional colors for the boxes.
            Boxes2D with_colors(ComponentBatch<rerun::components::Color> _colors) && {
                colors = std::move(_colors);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional radii for the lines that make up the boxes.
            Boxes2D with_radii(ComponentBatch<rerun::components::Radius> _radii) && {
                radii = std::move(_radii);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional text labels for the boxes.
            Boxes2D with_labels(ComponentBatch<rerun::components::Text> _labels) && {
                labels = std::move(_labels);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// An optional floating point value that specifies the 2D drawing order.
            ///
            /// Objects with higher values are drawn on top of those with lower values.
            ///
            /// The default for 2D boxes is 10.0.
            Boxes2D with_draw_order(rerun::components::DrawOrder _draw_order) && {
                draw_order = std::move(_draw_order);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Optional `ClassId`s for the boxes.
            ///
            /// The class ID provides colors and labels if not specified explicitly.
            Boxes2D with_class_ids(ComponentBatch<rerun::components::ClassId> _class_ids) && {
                class_ids = std::move(_class_ids);
                // See: https://github.com/rerun-io/rerun/issues/4027
                WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
            }

            /// Unique identifiers for each individual boxes in the batch.
            Boxes2D with_instance_keys(ComponentBatch<rerun::components::InstanceKey> _instance_keys
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
    struct AsComponents<archetypes::Boxes2D> {
        /// Serialize all set component batches.
        static Result<std::vector<SerializedComponentBatch>> serialize(
            const archetypes::Boxes2D& archetype
        );
    };
} // namespace rerun
