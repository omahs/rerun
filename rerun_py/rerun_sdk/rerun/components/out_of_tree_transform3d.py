# DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/python.rs
# Based on "crates/re_types/definitions/rerun/components/out_of_tree_transform3d.fbs".

# You can extend this class by creating a "OutOfTreeTransform3DExt" class in "out_of_tree_transform3d_ext.py".

from __future__ import annotations

from .. import datatypes
from .._baseclasses import (
    BaseDelegatingExtensionArray,
    BaseDelegatingExtensionType,
)

__all__ = ["OutOfTreeTransform3D", "OutOfTreeTransform3DArray", "OutOfTreeTransform3DType"]


class OutOfTreeTransform3D(datatypes.Transform3D):
    """
    An out-of-tree affine transform between two 3D spaces, represented in a given direction.

    "Out-of-tree" means that the transform only affects its own entity: children don't inherit from it.
    """

    # You can define your own __init__ function as a member of OutOfTreeTransform3DExt in out_of_tree_transform3d_ext.py

    # Note: there are no fields here because OutOfTreeTransform3D delegates to datatypes.Transform3D
    pass


class OutOfTreeTransform3DType(BaseDelegatingExtensionType):
    _TYPE_NAME = "rerun.components.OutOfTreeTransform3D"
    _DELEGATED_EXTENSION_TYPE = datatypes.Transform3DType


class OutOfTreeTransform3DArray(BaseDelegatingExtensionArray[datatypes.Transform3DArrayLike]):
    _EXTENSION_NAME = "rerun.components.OutOfTreeTransform3D"
    _EXTENSION_TYPE = OutOfTreeTransform3DType
    _DELEGATED_ARRAY_TYPE = datatypes.Transform3DArray


OutOfTreeTransform3DType._ARRAY_TYPE = OutOfTreeTransform3DArray

# TODO(cmc): bring back registration to pyarrow once legacy types are gone
# pa.register_extension_type(OutOfTreeTransform3DType())
