---
title: Minimal example
python: https://github.com/rerun-io/rerun/tree/latest/examples/python/minimal/main.py
rust: https://github.com/rerun-io/rerun/tree/latest/examples/rust/minimal/src/main.rs
# TODO(#3962): Update Link
cpp: https://github.com/rerun-io/rerun/tree/main/examples/cpp/minimal/main.cpp
thumbnail: https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/480w.png
---

<picture>
  <source media="(max-width: 480px)" srcset="https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/480w.png">
  <source media="(max-width: 768px)" srcset="https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/768w.png">
  <source media="(max-width: 1024px)" srcset="https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/1024w.png">
  <source media="(max-width: 1200px)" srcset="https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/1200w.png">
  <img src="https://static.rerun.io/minimal/0e47ac513ab25d56cf2b493128097d499a07e5e8/full.png" alt="Minimal example screenshot">
</picture>

The simplest example of how to use Rerun, showing how to log a point cloud.
# TODO(#3962): Update Link to C++
This is part of the [Quick Start guide](https://www.rerun.io/docs/getting-started/rust).

To build it from a checkout of the repository (requires a Rust toolchain):
```bash
cmake .
cmake --build . --target example_minimal
./examples/cpp/minimal/example_minimal
```
