// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/components/scalar_scattering.fbs".

#pragma once

#include "../data_cell.hpp"
#include "../result.hpp"

#include <cstdint>
#include <memory>

namespace arrow {
    class BooleanBuilder;
    class DataType;
    class MemoryPool;
} // namespace arrow

namespace rerun {
    namespace components {
        /// **Component**: If true, a scalar will be shown as individual point in a scatter plot.
        struct ScalarScattering {
            bool scattered;

            /// Name of the component, used for serialization.
            static const char NAME[];

          public:
            ScalarScattering() = default;

            ScalarScattering(bool scattered_) : scattered(scattered_) {}

            ScalarScattering& operator=(bool scattered_) {
                scattered = scattered_;
                return *this;
            }

            /// Returns the arrow data type this type corresponds to.
            static const std::shared_ptr<arrow::DataType>& arrow_datatype();

            /// Creates a new array builder with an array of this type.
            static Result<std::shared_ptr<arrow::BooleanBuilder>> new_arrow_array_builder(
                arrow::MemoryPool* memory_pool
            );

            /// Fills an arrow array builder with an array of this type.
            static Error fill_arrow_array_builder(
                arrow::BooleanBuilder* builder, const ScalarScattering* elements,
                size_t num_elements
            );

            /// Creates a Rerun DataCell from an array of ScalarScattering components.
            static Result<rerun::DataCell> to_data_cell(
                const ScalarScattering* instances, size_t num_instances
            );
        };
    } // namespace components
} // namespace rerun
