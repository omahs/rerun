// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/points3d.fbs".

#include "points3d.hpp"

#include "../component_batch_adapter_builtins.hpp"

namespace rerun {
    namespace archetypes {
        const char Points3D::INDICATOR_COMPONENT_NAME[] = "rerun.components.Points3DIndicator";
    }

    Result<std::vector<SerializedComponentBatch>> AsComponents<archetypes::Points3D>::serialize(
        const archetypes::Points3D& archetype
    ) {
        using namespace archetypes;
        std::vector<SerializedComponentBatch> cells;
        cells.reserve(7);

        {
            auto result = (archetype.positions).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.radii.has_value()) {
            auto result = (archetype.radii.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.colors.has_value()) {
            auto result = (archetype.colors.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.labels.has_value()) {
            auto result = (archetype.labels.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.class_ids.has_value()) {
            auto result = (archetype.class_ids.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.keypoint_ids.has_value()) {
            auto result = (archetype.keypoint_ids.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.instance_keys.has_value()) {
            auto result = (archetype.instance_keys.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        {
            auto result =
                ComponentBatch<Points3D::IndicatorComponent>(Points3D::IndicatorComponent())
                    .serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun
