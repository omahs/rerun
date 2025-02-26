// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/datatypes/class_description_map_elem.fbs".

#include "class_description_map_elem.hpp"

#include "class_description.hpp"
#include "class_id.hpp"

#include <arrow/builder.h>
#include <arrow/type_fwd.h>

namespace rerun {
    namespace datatypes {
        const std::shared_ptr<arrow::DataType>& ClassDescriptionMapElem::arrow_datatype() {
            static const auto datatype = arrow::struct_({
                arrow::field("class_id", rerun::datatypes::ClassId::arrow_datatype(), false),
                arrow::field(
                    "class_description",
                    rerun::datatypes::ClassDescription::arrow_datatype(),
                    false
                ),
            });
            return datatype;
        }

        Result<std::shared_ptr<arrow::StructBuilder>>
            ClassDescriptionMapElem::new_arrow_array_builder(arrow::MemoryPool* memory_pool) {
            if (memory_pool == nullptr) {
                return Error(ErrorCode::UnexpectedNullArgument, "Memory pool is null.");
            }

            return Result(std::make_shared<arrow::StructBuilder>(
                arrow_datatype(),
                memory_pool,
                std::vector<std::shared_ptr<arrow::ArrayBuilder>>({
                    rerun::datatypes::ClassId::new_arrow_array_builder(memory_pool).value,
                    rerun::datatypes::ClassDescription::new_arrow_array_builder(memory_pool).value,
                })
            ));
        }

        Error ClassDescriptionMapElem::fill_arrow_array_builder(
            arrow::StructBuilder* builder, const ClassDescriptionMapElem* elements,
            size_t num_elements
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

            {
                auto field_builder = static_cast<arrow::UInt16Builder*>(builder->field_builder(0));
                ARROW_RETURN_NOT_OK(field_builder->Reserve(static_cast<int64_t>(num_elements)));
                for (size_t elem_idx = 0; elem_idx < num_elements; elem_idx += 1) {
                    RR_RETURN_NOT_OK(rerun::datatypes::ClassId::fill_arrow_array_builder(
                        field_builder,
                        &elements[elem_idx].class_id,
                        1
                    ));
                }
            }
            {
                auto field_builder = static_cast<arrow::StructBuilder*>(builder->field_builder(1));
                ARROW_RETURN_NOT_OK(field_builder->Reserve(static_cast<int64_t>(num_elements)));
                for (size_t elem_idx = 0; elem_idx < num_elements; elem_idx += 1) {
                    RR_RETURN_NOT_OK(rerun::datatypes::ClassDescription::fill_arrow_array_builder(
                        field_builder,
                        &elements[elem_idx].class_description,
                        1
                    ));
                }
            }
            ARROW_RETURN_NOT_OK(builder->AppendValues(static_cast<int64_t>(num_elements), nullptr));

            return Error::ok();
        }
    } // namespace datatypes
} // namespace rerun
