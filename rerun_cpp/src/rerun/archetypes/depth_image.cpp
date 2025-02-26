// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/depth_image.fbs".

#include "depth_image.hpp"

#include "../component_batch_adapter_builtins.hpp"

namespace rerun {
    namespace archetypes {
        const char DepthImage::INDICATOR_COMPONENT_NAME[] = "rerun.components.DepthImageIndicator";
    }

    Result<std::vector<SerializedComponentBatch>> AsComponents<archetypes::DepthImage>::serialize(
        const archetypes::DepthImage& archetype
    ) {
        using namespace archetypes;
        std::vector<SerializedComponentBatch> cells;
        cells.reserve(3);

        {
            auto result = ComponentBatch<rerun::components::TensorData>(archetype.data).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.meter.has_value()) {
            auto result =
                ComponentBatch<rerun::components::DepthMeter>(archetype.meter.value()).serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.draw_order.has_value()) {
            auto result = ComponentBatch<rerun::components::DrawOrder>(archetype.draw_order.value())
                              .serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        {
            auto result =
                ComponentBatch<DepthImage::IndicatorComponent>(DepthImage::IndicatorComponent())
                    .serialize();
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun
