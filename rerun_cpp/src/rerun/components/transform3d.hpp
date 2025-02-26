// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/components/transform3d.fbs".

#pragma once

#include "../data_cell.hpp"
#include "../datatypes/transform3d.hpp"
#include "../result.hpp"

#include <cstdint>
#include <memory>

namespace arrow {
    class DataType;
    class DenseUnionBuilder;
    class MemoryPool;
} // namespace arrow

namespace rerun {
    namespace components {
        /// **Component**: An affine transform between two 3D spaces, represented in a given direction.
        struct Transform3D {
            /// Representation of the transform.
            rerun::datatypes::Transform3D repr;

            /// Name of the component, used for serialization.
            static const char NAME[];

          public:
            Transform3D() = default;

            Transform3D(rerun::datatypes::Transform3D repr_) : repr(repr_) {}

            Transform3D& operator=(rerun::datatypes::Transform3D repr_) {
                repr = repr_;
                return *this;
            }

            /// Cast to the underlying Transform3D datatype
            operator rerun::datatypes::Transform3D() const {
                return repr;
            }

            /// Returns the arrow data type this type corresponds to.
            static const std::shared_ptr<arrow::DataType>& arrow_datatype();

            /// Creates a new array builder with an array of this type.
            static Result<std::shared_ptr<arrow::DenseUnionBuilder>> new_arrow_array_builder(
                arrow::MemoryPool* memory_pool
            );

            /// Fills an arrow array builder with an array of this type.
            static Error fill_arrow_array_builder(
                arrow::DenseUnionBuilder* builder, const Transform3D* elements, size_t num_elements
            );

            /// Creates a Rerun DataCell from an array of Transform3D components.
            static Result<rerun::DataCell> to_data_cell(
                const Transform3D* instances, size_t num_instances
            );
        };
    } // namespace components
} // namespace rerun
