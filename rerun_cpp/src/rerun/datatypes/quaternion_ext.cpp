#include "quaternion.hpp"

// Uncomment for better auto-complete while editing the extension.
// #define EDIT_EXTENSION

namespace rerun {
    namespace datatypes {

#ifdef EDIT_EXTENSION
        // [CODEGEN COPY TO HEADER START]

        static const Quaternion IDENTITY;

        /// Construct Quaternion from x/y/z/w values.
        static Quaternion from_xyzw(float x, float y, float z, float w) {
            return Quaternion{x, y, z, w};
        }

        /// Construct Quaternion from w/x/y/z values.
        static Quaternion from_wxyz(float w, float x, float y, float z) {
            return Quaternion{x, y, z, w};
        }

        /// Construct Quaternion from x/y/z/w array.
        static Quaternion from_xyzw(std::array<float, 4> xyzw_) {
            return Quaternion{xyzw_};
        }

        /// Construct Quaternion from w/x/y/z array.
        static Quaternion from_wxyz(std::array<float, 4> wxyz_) {
            return Quaternion{wxyz_[1], wxyz_[2], wxyz_[3], wxyz_[0]};
        }

        /// Construct Quaternion from x/y/z/w float pointer.
        static Quaternion from_xyzw(const float* xyzw_) {
            return Quaternion{xyzw_[0], xyzw_[1], xyzw_[2], xyzw_[3]};
        }

        /// Construct Quaternion from w/x/y/z float pointer.
        static Quaternion from_wxyz(const float* wxyz_) {
            return Quaternion{wxyz_[1], wxyz_[2], wxyz_[3], wxyz_[0]};
        }

        float x() const {
            return xyzw[0];
        }

        float y() const {
            return xyzw[1];
        }

        float z() const {
            return xyzw[2];
        }

        float w() const {
            return xyzw[3];
        }

        // [CODEGEN COPY TO HEADER END]
#endif

        const Quaternion Quaternion::IDENTITY = Quaternion::from_xyzw(0.0f, 0.0f, 0.0f, 1.0f);
    } // namespace datatypes
} // namespace rerun
