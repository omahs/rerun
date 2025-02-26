// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/testing/components/fuzzy.fbs".

#pragma once

#include <cstdint>
#include <memory>
#include <optional>
#include <rerun/data_cell.hpp>
#include <rerun/result.hpp>
#include <string>
#include <utility>
#include <vector>

namespace arrow {
    class DataType;
    class ListBuilder;
    class MemoryPool;
} // namespace arrow

namespace rerun {
    namespace components {
        struct AffixFuzzer13 {
            std::optional<std::vector<std::string>> many_strings_optional;

            /// Name of the component, used for serialization.
            static const char NAME[];

          public:
            AffixFuzzer13() = default;

            AffixFuzzer13(std::optional<std::vector<std::string>> many_strings_optional_)
                : many_strings_optional(std::move(many_strings_optional_)) {}

            AffixFuzzer13& operator=(std::optional<std::vector<std::string>> many_strings_optional_
            ) {
                many_strings_optional = std::move(many_strings_optional_);
                return *this;
            }

            /// Returns the arrow data type this type corresponds to.
            static const std::shared_ptr<arrow::DataType>& arrow_datatype();

            /// Creates a new array builder with an array of this type.
            static Result<std::shared_ptr<arrow::ListBuilder>> new_arrow_array_builder(
                arrow::MemoryPool* memory_pool
            );

            /// Fills an arrow array builder with an array of this type.
            static Error fill_arrow_array_builder(
                arrow::ListBuilder* builder, const AffixFuzzer13* elements, size_t num_elements
            );

            /// Creates a Rerun DataCell from an array of AffixFuzzer13 components.
            static Result<rerun::DataCell> to_data_cell(
                const AffixFuzzer13* instances, size_t num_instances
            );
        };
    } // namespace components
} // namespace rerun
