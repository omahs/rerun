// Log a pinhole and a random image.

#include <rerun.hpp>

#include <algorithm> // std::generate
#include <cstdlib>   // std::rand
#include <vector>

int main() {
    auto rec = rerun::RecordingStream("rerun_example_line_strip3d");
    rec.spawn().throw_on_failure();

    rec.log("world/image", rerun::Pinhole::from_focal_length_and_resolution(3.0f, {3.0f, 3.0f}));

    std::vector<uint8_t> random_data(3 * 3 * 3);
    std::generate(random_data.begin(), random_data.end(), std::rand);
    std::generate(random_data.begin(), random_data.end(), [] {
        return static_cast<uint8_t>(std::rand());
    });

    const auto tensor = rerun::datatypes::TensorData({3, 3, 3}, random_data);
    rec.log("world/image", rerun::Image(tensor));
}
