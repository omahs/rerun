window.BENCHMARK_DATA = {
  "lastUpdate": 1698610269779,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Sizes": [
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f0fce761727bfb25e0027cdaae210ad7157d21a",
          "message": "Spawn via `$PATH` 3: C and C++ implementations (#3998)\n\n- Introduces standalone `rr_spawn(rr_spawn_options)` C API that allows\r\none to start a Rerun Viewer process ready to listen for TCP connections,\r\nas well as the associated `rr_recording_stream` integration.\r\n- Introduces standalone `rerun::spawn()` C++ API that allows one to\r\nstart a Rerun Viewer process ready to listen for TCP connections, as\r\nwell as the associated `RecordingStream` integration.\r\n\r\n\r\n\r\nhttps://github.com/rerun-io/rerun/assets/2910679/8ae5003a-78b2-4e75-91d3-6dc4b8dd22ac\r\n\r\n\r\n\r\n---\r\n\r\nSpawn via `$PATH` series:\r\n- #3996\r\n- #3997\r\n- #3998\r\n\r\n---\r\n\r\n- Fixes #3757 \r\n- Fixes #3942",
          "timestamp": "2023-10-26T16:11:00+02:00",
          "tree_id": "f8a94795ddd1049da798e1dd957e98b744b0e7d3",
          "url": "https://github.com/rerun-io/rerun/commit/2f0fce761727bfb25e0027cdaae210ad7157d21a"
        },
        "date": 1698331307876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d25acfa6f9908340460b4bc458bd3c0c3a6c5a",
          "message": "Spawn via `$PATH` 4: Updated docs & misc clean up (#4013)\n\nLast one.\r\n\r\nSpawn via `$PATH` series:\r\n- #3996\r\n- #3997\r\n- #3998\r\n- #4013",
          "timestamp": "2023-10-26T18:29:37+02:00",
          "tree_id": "4e5b68af259d8dd0f71517a9dcf5ad153a365883",
          "url": "https://github.com/rerun-io/rerun/commit/55d25acfa6f9908340460b4bc458bd3c0c3a6c5a"
        },
        "date": 1698340074484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c73d78f0ec9799bb967e2e7b292e8d5e115d9639",
          "message": "Allow torch >=2.0.1 instead of 2.1.0 (#4032)\n\n### What\r\nPRs have started failing due to incompatible torch dep when installing\r\nCI requirements:\r\nhttps://github.com/rerun-io/rerun/actions/runs/6658351044/job/18095061609\r\n\r\nI think we can relax this for now.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-26T20:55:52+02:00",
          "tree_id": "1936b23bc8ad4b0f8dabb23d7c846765f13e785e",
          "url": "https://github.com/rerun-io/rerun/commit/c73d78f0ec9799bb967e2e7b292e8d5e115d9639"
        },
        "date": 1698348448461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fca4ee7fb67df6c1e430a7fd237013995d88db0",
          "message": "Lock python in CI to 3.11 (#4033)\n\n### What\r\nGithub runner looks like it just switched default to python 3.12.\r\n\r\nhttps://github.com/actions/runner-images/releases/tag/ubuntu22%2F20231025.1\r\n\r\nThis causes lots of pain for our deps.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4033) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4033)\r\n- [Docs\r\npreview](https://rerun.io/preview/75f4f0f1b922a98c5f6c6503023c05c00c1b3c7c/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/75f4f0f1b922a98c5f6c6503023c05c00c1b3c7c/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-26T21:24:48+02:00",
          "tree_id": "ece3e76842289690291741eae8201e2f1f4cb0bc",
          "url": "https://github.com/rerun-io/rerun/commit/9fca4ee7fb67df6c1e430a7fd237013995d88db0"
        },
        "date": 1698349989651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3d9678cc216c09a6d93185be57b6d049f2bec9a",
          "message": "Add missing include for <optional> in recording_stream.hpp (#4034)\n\n### What\r\nDoesn't seem to be required on all platforms, but it's in the interface\r\nof spawn so we should have it here.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-26T22:28:32+02:00",
          "tree_id": "0ac5c4f963bc648982a5291c799b0ee6938b8f8e",
          "url": "https://github.com/rerun-io/rerun/commit/c3d9678cc216c09a6d93185be57b6d049f2bec9a"
        },
        "date": 1698353799483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "565b0c98ab0c9dc55bc1ade2e7d7e30b9d47df95",
          "message": "Example readme fixes (#4025)\n\n### What\r\n\r\nMostly shaping up the C++ minimal example.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4025) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4025)\r\n- [Docs\r\npreview](https://rerun.io/preview/568abbd65d0fe0c0ed746d69df7562c4ff563b8c/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/568abbd65d0fe0c0ed746d69df7562c4ff563b8c/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-27T09:50:57+02:00",
          "tree_id": "19ed1c1533567f68f691018a5488d95351754215",
          "url": "https://github.com/rerun-io/rerun/commit/565b0c98ab0c9dc55bc1ade2e7d7e30b9d47df95"
        },
        "date": 1698394929882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b05c2346c56b2589faa4a7b54339eb3b17d870f",
          "message": "Add C++ API for `set_default_enabled` to globally enable/disable recording streams. (#4014)\n\nResolves:\r\n - https://github.com/rerun-io/rerun/issues/3754\r\n\r\nAdds a very minimal singleton config system and an API to toggle the\r\nstate of default_recordings. Specifically this makes it possible for a\r\nuser to globally disable default recordings, and then enable them via\r\nthe RERUN environment variable.",
          "timestamp": "2023-10-27T10:13:04+02:00",
          "tree_id": "90543e92b48037f73a156616a4d7095b3e728637",
          "url": "https://github.com/rerun-io/rerun/commit/2b05c2346c56b2589faa4a7b54339eb3b17d870f"
        },
        "date": 1698396058560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c929c34fb8dc5e703771f3d8af9733c48b7d5d93",
          "message": "`spawn` version compatibility check (#4031)\n\nNothing too fancy but should do the job!\r\n\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/2910679/f5b88c9d-68fc-4412-b302-8437f2b03184)\r\n\r\n\r\n- Fixes #4001",
          "timestamp": "2023-10-27T10:31:16+02:00",
          "tree_id": "9f8f334affd76c05bdbd5d9209d341793203a62a",
          "url": "https://github.com/rerun-io/rerun/commit/c929c34fb8dc5e703771f3d8af9733c48b7d5d93"
        },
        "date": 1698397180424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fed6660c3c4e29d113815ffd2d9e9962fbde795",
          "message": "Support `pathlib.Path` for `rr.save` (#4036)\n\n- Fixes #4024",
          "timestamp": "2023-10-27T11:24:25+02:00",
          "tree_id": "e253cf669cbef85ba27d9850ba080ecc222eaddd",
          "url": "https://github.com/rerun-io/rerun/commit/4fed6660c3c4e29d113815ffd2d9e9962fbde795"
        },
        "date": 1698400445782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5f514cf84d7576a5d32b13e93bbd80dfe09bb3d",
          "message": "Rust SDK: expose clap in externals (#4040)\n\nVery annoying to have to manually `cargo add clap` when using our `clap`\r\nintegration :man_facepalming:",
          "timestamp": "2023-10-27T12:42:17+02:00",
          "tree_id": "45e28b36ee9540a266a239c558173cfd9cd98555",
          "url": "https://github.com/rerun-io/rerun/commit/a5f514cf84d7576a5d32b13e93bbd80dfe09bb3d"
        },
        "date": 1698405073531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.52",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "132550499+rerun-bot@users.noreply.github.com",
            "name": "rerun-bot",
            "username": "rerun-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a346b8a32d3836739dbe9d22bdacbb1f4d213e51",
          "message": "Release 0.10.0-alpha.8 (#4021)\n\n* `cargo install rerun-cli@0.10.0-alpha.8`\r\n* `pip install rerun-sdk==0.10a8`\r\n* Rerun C++ SDK: https://build.rerun.io/commit/bc05d11/rerun_cpp_sdk.zip\r\n\r\n* [x] Shared with users\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\nCo-authored-by: jprochazk <1665677+jprochazk@users.noreply.github.com>",
          "timestamp": "2023-10-27T13:47:53+02:00",
          "tree_id": "40d5089c4fcb52fb1965489578039cc7626ff7ed",
          "url": "https://github.com/rerun-io/rerun/commit/a346b8a32d3836739dbe9d22bdacbb1f4d213e51"
        },
        "date": 1698409753789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6c50d28f3f83e21736b06b9d3ee668b290136b9",
          "message": "`spawn`: versioned links for missing executable too (#4041)\n\nFixing an oversight from #4031: if the user doesn't have any executable\r\nat all on their PATH, don't just blindly tell them to download latest,\r\nit might not even be compatible! Use a versioned link in that case too,\r\nwhere possible.\r\n\r\n```sh\r\n$ which rerun\r\nwhich: no rerun in (...)\r\n\r\n$ RUST_LOG=off cargo r -p code_examples --bin point3d_simple\r\n\r\nError: SpawnViewer(Failed to find Rerun Viewer executable in PATH.\r\n\r\n    You can install an appropriate version of the Rerun Viewer via binary releases:\r\n    * Using `cargo`: `cargo binstall --force rerun-cli@0.10.0` (see https://github.com/cargo-bins/cargo-binstall)\r\n    * Via direct download from our release assets: https://github.com/rerun-io/rerun/releases/0.10.0/\r\n    * Using `pip`: `pip3 install rerun-sdk==0.10.0` (warning: pip version has slower start times!)\r\n\r\n    For more information, refer to our complete install documentation over at:\r\n    https://rerun.io/docs/getting-started/installing-viewer\r\n\r\nPATH=\"...\")\r\n```\r\n(This is using my local copy where everything is tagged as if `0.10.0`\r\nwas released)",
          "timestamp": "2023-10-27T14:53:13+02:00",
          "tree_id": "c96abdef564b22a5cb5febc78badef6b95a24b11",
          "url": "https://github.com/rerun-io/rerun/commit/c6c50d28f3f83e21736b06b9d3ee668b290136b9"
        },
        "date": 1698413052660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc8c9ea5dd0ca4bc471884ee613352b90b6d23c1",
          "message": "Use sccache 0.5.2 (#4045)\n\n### What\r\nThis should fix the red CI\r\n\r\n`sccache` 0.6 was released 30 minutes ago, but its binaries aren't\r\npublished yet, so all our jobs are fialing.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4045) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4045)\r\n- [Docs\r\npreview](https://rerun.io/preview/e9882fdbb4fa9ba3f23abd6bfaa86555b408f5ae/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/e9882fdbb4fa9ba3f23abd6bfaa86555b408f5ae/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-27T16:32:37+02:00",
          "tree_id": "d80a9dad08b05c5e7f04c8287a72c8b3a0685e10",
          "url": "https://github.com/rerun-io/rerun/commit/cc8c9ea5dd0ca4bc471884ee613352b90b6d23c1"
        },
        "date": 1698418997736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ec5ce79c515ee553c8eb31c9afaad6469365d0a",
          "message": "Changes after trying to run the cpp getting started guide (#4049)\n\n### What\r\nA few more details around the pixi install and the CMAKE_PREFIX_PATH.\r\nMake the example code match minimal/main.cpp\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4049) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4049)\r\n- [Docs\r\npreview](https://rerun.io/preview/74fc40be104594908cfc1d2e2e31da8900401eeb/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/74fc40be104594908cfc1d2e2e31da8900401eeb/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-27T21:57:18+02:00",
          "tree_id": "033c23d435a490340cca52cce57a68ab3118ccd1",
          "url": "https://github.com/rerun-io/rerun/commit/2ec5ce79c515ee553c8eb31c9afaad6469365d0a"
        },
        "date": 1698438416041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7f404a1ae71880803340bda9ac111f8aa91990a",
          "message": "py formatting fix (#4059)\n\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4059) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4059)\r\n- [Docs\r\npreview](https://rerun.io/preview/eb6f56bb67c6d076a678a2d2e7436b418d493edd/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/eb6f56bb67c6d076a678a2d2e7436b418d493edd/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-29T20:35:49+01:00",
          "tree_id": "1cce9968726ef6818562e18b64af81ed0268386a",
          "url": "https://github.com/rerun-io/rerun/commit/b7f404a1ae71880803340bda9ac111f8aa91990a"
        },
        "date": 1698610253032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}