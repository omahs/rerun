// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/testing/components/fuzzy.fbs".

#include "affix_fuzzer11.hpp"

#include <arrow/builder.h>
#include <arrow/type_fwd.h>

namespace rerun {
    namespace components {
        const char AffixFuzzer11::NAME[] = "rerun.testing.components.AffixFuzzer11";

        const std::shared_ptr<arrow::DataType>& AffixFuzzer11::arrow_datatype() {
            static const auto datatype = arrow::list(arrow::field("item", arrow::float32(), false));
            return datatype;
        }

        Result<std::shared_ptr<arrow::ListBuilder>> AffixFuzzer11::new_arrow_array_builder(
            arrow::MemoryPool* memory_pool
        ) {
            if (memory_pool == nullptr) {
                return Error(ErrorCode::UnexpectedNullArgument, "Memory pool is null.");
            }

            return Result(std::make_shared<arrow::ListBuilder>(
                memory_pool,
                std::make_shared<arrow::FloatBuilder>(memory_pool)
            ));
        }

        Error AffixFuzzer11::fill_arrow_array_builder(
            arrow::ListBuilder* builder, const AffixFuzzer11* elements, size_t num_elements
        ) {
            if (builder == nullptr) {
                return Error(ErrorCode::UnexpectedNullArgument, "Passed array builder is null.");
            }
            if (elements == nullptr) {
                return Error(
                    ErrorCode::UnexpectedNullArgument,
                    "Cannot serialize null pointer to arrow array."
                );
            }

            auto value_builder = static_cast<arrow::FloatBuilder*>(builder->value_builder());
            ARROW_RETURN_NOT_OK(builder->Reserve(static_cast<int64_t>(num_elements)));
            ARROW_RETURN_NOT_OK(value_builder->Reserve(static_cast<int64_t>(num_elements * 1)));

            for (size_t elem_idx = 0; elem_idx < num_elements; elem_idx += 1) {
                const auto& element = elements[elem_idx];
                if (element.many_floats_optional.has_value()) {
                    ARROW_RETURN_NOT_OK(builder->Append());
                    ARROW_RETURN_NOT_OK(value_builder->AppendValues(
                        element.many_floats_optional.value().data(),
                        static_cast<int64_t>(element.many_floats_optional.value().size()),
                        nullptr
                    ));
                } else {
                    ARROW_RETURN_NOT_OK(builder->AppendNull());
                }
            }

            return Error::ok();
        }

        Result<rerun::DataCell> AffixFuzzer11::to_data_cell(
            const AffixFuzzer11* instances, size_t num_instances
        ) {
            // TODO(andreas): Allow configuring the memory pool.
            arrow::MemoryPool* pool = arrow::default_memory_pool();

            auto builder_result = AffixFuzzer11::new_arrow_array_builder(pool);
            RR_RETURN_NOT_OK(builder_result.error);
            auto builder = std::move(builder_result.value);
            if (instances && num_instances > 0) {
                RR_RETURN_NOT_OK(
                    AffixFuzzer11::fill_arrow_array_builder(builder.get(), instances, num_instances)
                );
            }
            std::shared_ptr<arrow::Array> array;
            ARROW_RETURN_NOT_OK(builder->Finish(&array));

            return rerun::DataCell::create(
                AffixFuzzer11::NAME,
                AffixFuzzer11::arrow_datatype(),
                std::move(array)
            );
        }
    } // namespace components
} // namespace rerun
