window.BENCHMARK_DATA = {
  "lastUpdate": 1698629132873,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
        "date": 1698330249280,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3061583,
            "range": "± 28432",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 390,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3071302,
            "range": "± 16715",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1898009,
            "range": "± 12649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21338146,
            "range": "± 1349827",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138222930,
            "range": "± 2363092",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 178707145,
            "range": "± 1035296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 337551576,
            "range": "± 3269606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215567833,
            "range": "± 2726394",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70407597,
            "range": "± 2974266",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 288816021,
            "range": "± 3989880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15059662,
            "range": "± 1536587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4559344,
            "range": "± 113368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 508307,
            "range": "± 6396",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21547137,
            "range": "± 550940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421724,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8171197,
            "range": "± 184450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8587490,
            "range": "± 91655",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135192,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5229,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91070,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 247414,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37796,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2610,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42550,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1830727073,
            "range": "± 10670877",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1259427,
            "range": "± 4902",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1863914798,
            "range": "± 7446099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1353548,
            "range": "± 11014",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1186721,
            "range": "± 5328",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3662,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1206594,
            "range": "± 4939",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29623,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2983,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 611,
            "range": "± 2",
            "unit": "ns/iter"
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
        "date": 1698338574271,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3049946,
            "range": "± 16708",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 385,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3077644,
            "range": "± 306355",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1890111,
            "range": "± 12640",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20204628,
            "range": "± 1549906",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139967674,
            "range": "± 3236049",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176654127,
            "range": "± 1482022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 333986432,
            "range": "± 2999604",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214506652,
            "range": "± 5490285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66031172,
            "range": "± 2615114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 286709727,
            "range": "± 3925639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14694333,
            "range": "± 249058",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4564549,
            "range": "± 24351",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 473566,
            "range": "± 5242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21096932,
            "range": "± 1641468",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406022,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8162598,
            "range": "± 24925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8563182,
            "range": "± 33980",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 137211,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5222,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90575,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240880,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37882,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2608,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42297,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1842214893,
            "range": "± 8622518",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1256934,
            "range": "± 13423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1871116583,
            "range": "± 6226185",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1337224,
            "range": "± 5117",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1178537,
            "range": "± 4933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3600,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1208729,
            "range": "± 7276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29217,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 336,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2971,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 600,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698347373243,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3136817,
            "range": "± 56776",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 390,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 437,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3126027,
            "range": "± 28322",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1882483,
            "range": "± 3736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 23723262,
            "range": "± 2733448",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137816553,
            "range": "± 2589600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176699828,
            "range": "± 1007629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332630440,
            "range": "± 3243068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216804976,
            "range": "± 2079250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69903334,
            "range": "± 2604457",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 291117807,
            "range": "± 3645704",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15715544,
            "range": "± 1087354",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4704580,
            "range": "± 111913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 485429,
            "range": "± 5705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 23312525,
            "range": "± 715682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 422536,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8195353,
            "range": "± 320514",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8668187,
            "range": "± 164913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135754,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5219,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89821,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 242354,
            "range": "± 3639",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38691,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2605,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42079,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1809568813,
            "range": "± 9146924",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1278698,
            "range": "± 7586",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1846242634,
            "range": "± 4959721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1347833,
            "range": "± 9054",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1182534,
            "range": "± 10396",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3699,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1186661,
            "range": "± 6684",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29189,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 319,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2916,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 624,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698349069528,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3046173,
            "range": "± 32241",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 395,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 300,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 442,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3054358,
            "range": "± 43050",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1883231,
            "range": "± 21477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18892767,
            "range": "± 314309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133876493,
            "range": "± 1365886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171492436,
            "range": "± 1761614",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327539856,
            "range": "± 2287752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208447636,
            "range": "± 2015702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61540571,
            "range": "± 701002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 273057510,
            "range": "± 2224473",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14825527,
            "range": "± 250140",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4470807,
            "range": "± 72074",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 483473,
            "range": "± 5782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20542006,
            "range": "± 320205",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406510,
            "range": "± 5349",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8354015,
            "range": "± 123277",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8775377,
            "range": "± 122042",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 134253,
            "range": "± 3297",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5312,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89604,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239519,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37570,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2718,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43051,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1826549711,
            "range": "± 6938465",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1258342,
            "range": "± 28664",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1841376129,
            "range": "± 6971108",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1337493,
            "range": "± 30962",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1202335,
            "range": "± 19210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3652,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1230830,
            "range": "± 23842",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29543,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 338,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2908,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 623,
            "range": "± 9",
            "unit": "ns/iter"
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
        "date": 1698352954035,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3090701,
            "range": "± 156798",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 384,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3121971,
            "range": "± 130236",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1881734,
            "range": "± 12637",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26950247,
            "range": "± 2501932",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 146615175,
            "range": "± 3373117",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 185550768,
            "range": "± 2827242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352723150,
            "range": "± 7810951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 220769657,
            "range": "± 2725462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74420684,
            "range": "± 4204151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 343493498,
            "range": "± 26509182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14942284,
            "range": "± 770259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4575515,
            "range": "± 278803",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 484835,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 22890262,
            "range": "± 711074",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 408748,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8255189,
            "range": "± 785785",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8626579,
            "range": "± 34130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136854,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5256,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89865,
            "range": "± 2715",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239738,
            "range": "± 752",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37546,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2660,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42173,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1855942716,
            "range": "± 24274227",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1253406,
            "range": "± 10492",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1854174568,
            "range": "± 6940011",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1362067,
            "range": "± 3797",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1191168,
            "range": "± 9811",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3605,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1202218,
            "range": "± 11746",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29194,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 323,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2915,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 599,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698393922105,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3064010,
            "range": "± 6090",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 385,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 446,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3112548,
            "range": "± 23554",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1883982,
            "range": "± 8401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19042347,
            "range": "± 209071",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132189303,
            "range": "± 942630",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173068700,
            "range": "± 950934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323530365,
            "range": "± 5810959",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 207410343,
            "range": "± 586115",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59215545,
            "range": "± 875848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 270742637,
            "range": "± 1795840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14886891,
            "range": "± 35314",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4464229,
            "range": "± 13691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 470623,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20806210,
            "range": "± 118788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 420391,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8216040,
            "range": "± 13874",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8648632,
            "range": "± 11701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136609,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5350,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90162,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238816,
            "range": "± 1970",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37776,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2601,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42355,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1809228671,
            "range": "± 5354418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1248715,
            "range": "± 8335",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1851306931,
            "range": "± 21427200",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1355842,
            "range": "± 26958",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1182080,
            "range": "± 4727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3611,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1196989,
            "range": "± 5796",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29263,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 321,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2905,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 598,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698395164282,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3094111,
            "range": "± 7921",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 388,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3130970,
            "range": "± 5345",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1896496,
            "range": "± 6999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19712263,
            "range": "± 826978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136840558,
            "range": "± 3086818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 177158241,
            "range": "± 1255278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329622609,
            "range": "± 5375924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 211061225,
            "range": "± 1847372",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64830130,
            "range": "± 1845743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283653306,
            "range": "± 3411150",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14797308,
            "range": "± 112765",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4511141,
            "range": "± 16486",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 506808,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21074043,
            "range": "± 255412",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 410450,
            "range": "± 9429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8114238,
            "range": "± 10988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8584766,
            "range": "± 18118",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 137602,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5196,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 92383,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 248931,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38503,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2643,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42088,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1845353627,
            "range": "± 4389180",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1247889,
            "range": "± 7378",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1844848157,
            "range": "± 14105845",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1319942,
            "range": "± 7116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1184935,
            "range": "± 9116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3589,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1207129,
            "range": "± 5595",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29181,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 321,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 7870,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 624,
            "range": "± 2",
            "unit": "ns/iter"
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
        "date": 1698396270902,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3104098,
            "range": "± 14880",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3147056,
            "range": "± 20384",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1886223,
            "range": "± 7913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20667666,
            "range": "± 2165653",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138107159,
            "range": "± 2097860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 177015696,
            "range": "± 845277",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 333396810,
            "range": "± 2284227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213534782,
            "range": "± 1935759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66679262,
            "range": "± 2030606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 284412454,
            "range": "± 3134084",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14915917,
            "range": "± 754052",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4549444,
            "range": "± 55753",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 473859,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21401694,
            "range": "± 461811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421560,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8153267,
            "range": "± 121125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8605177,
            "range": "± 54337",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 141269,
            "range": "± 4411",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5307,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91358,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239976,
            "range": "± 1403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38564,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2617,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42222,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1811240310,
            "range": "± 5976585",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1292050,
            "range": "± 11104",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1840917550,
            "range": "± 5179912",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1350800,
            "range": "± 11019",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1173893,
            "range": "± 14024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3648,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1193907,
            "range": "± 4469",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29184,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 336,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2926,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 628,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698399461020,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3116937,
            "range": "± 28202",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 382,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3141954,
            "range": "± 11789",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1880937,
            "range": "± 10686",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19834911,
            "range": "± 1272864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136579573,
            "range": "± 1966642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176014291,
            "range": "± 944544",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329819614,
            "range": "± 4008334",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 211195713,
            "range": "± 2242310",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72099669,
            "range": "± 2429829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 281521938,
            "range": "± 3506563",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14608492,
            "range": "± 233940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4509077,
            "range": "± 33972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 487466,
            "range": "± 6490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20606504,
            "range": "± 342741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421075,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8099439,
            "range": "± 48251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8531396,
            "range": "± 54725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135719,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5270,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90399,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240092,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37597,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2624,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43202,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1852619515,
            "range": "± 7039633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1248466,
            "range": "± 19662",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1882857485,
            "range": "± 5639731",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1342052,
            "range": "± 9257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1171380,
            "range": "± 6437",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3630,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1190727,
            "range": "± 5928",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29694,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2935,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 611,
            "range": "± 1",
            "unit": "ns/iter"
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
        "date": 1698404139952,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3071210,
            "range": "± 4610",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 396,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 314,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3118120,
            "range": "± 4630",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1884592,
            "range": "± 9294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19903338,
            "range": "± 254151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137042308,
            "range": "± 2557818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 174942191,
            "range": "± 1830613",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 337860480,
            "range": "± 3166587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214937372,
            "range": "± 1737966",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64354738,
            "range": "± 1267262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 285909505,
            "range": "± 2263893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14774834,
            "range": "± 30294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4491299,
            "range": "± 30053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 507749,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21008252,
            "range": "± 148002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421121,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8067940,
            "range": "± 14548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8512942,
            "range": "± 29516",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136754,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5184,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88769,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238823,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37603,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2588,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42007,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1886723267,
            "range": "± 11867654",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1281255,
            "range": "± 8604",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1960302836,
            "range": "± 14571238",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1354305,
            "range": "± 6162",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1206219,
            "range": "± 12041",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3644,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1236284,
            "range": "± 6312",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29654,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 318,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2866,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 602,
            "range": "± 3",
            "unit": "ns/iter"
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
        "date": 1698408195312,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3094504,
            "range": "± 65071",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 397,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 300,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3133255,
            "range": "± 33610",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1891860,
            "range": "± 30671",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19152151,
            "range": "± 1200168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130294358,
            "range": "± 1561234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170717009,
            "range": "± 2272078",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 316985122,
            "range": "± 3036940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 204020255,
            "range": "± 2639895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59905088,
            "range": "± 1189263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 268595411,
            "range": "± 2812473",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14300453,
            "range": "± 263706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4498143,
            "range": "± 53886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 510003,
            "range": "± 6434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20500970,
            "range": "± 755959",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 410695,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8204925,
            "range": "± 103066",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8617653,
            "range": "± 169372",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135711,
            "range": "± 2081",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5225,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89793,
            "range": "± 2014",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238803,
            "range": "± 3140",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37588,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2629,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42669,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1763545979,
            "range": "± 8785639",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1275737,
            "range": "± 29624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1813167772,
            "range": "± 6966370",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1340079,
            "range": "± 22677",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1186974,
            "range": "± 26944",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3609,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1208012,
            "range": "± 39512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 31224,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 330,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2939,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 632,
            "range": "± 14",
            "unit": "ns/iter"
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
        "date": 1698412041537,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3095152,
            "range": "± 4692",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 384,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3120495,
            "range": "± 22186",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1880984,
            "range": "± 8149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19578659,
            "range": "± 1161983",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132291490,
            "range": "± 1571999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173859847,
            "range": "± 831241",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325108740,
            "range": "± 1555908",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208792599,
            "range": "± 1438404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61731314,
            "range": "± 1187980",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 277621602,
            "range": "± 2398441",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14441661,
            "range": "± 116130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4482326,
            "range": "± 74461",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 484398,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20834499,
            "range": "± 187292",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 409633,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8252534,
            "range": "± 16322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8678462,
            "range": "± 18698",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135328,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5191,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89260,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240050,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38837,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2635,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43417,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1796771153,
            "range": "± 7945674",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1241291,
            "range": "± 20419",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1854673158,
            "range": "± 5074957",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1348943,
            "range": "± 2396",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1188298,
            "range": "± 7081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3627,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1202325,
            "range": "± 23555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29181,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 339,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2983,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 606,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698417917532,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2935624,
            "range": "± 34381",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 369,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 286,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 403,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2926750,
            "range": "± 31152",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1754777,
            "range": "± 16203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18125275,
            "range": "± 527389",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127955808,
            "range": "± 1399919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165153468,
            "range": "± 2886409",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 309507391,
            "range": "± 1725856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 194964339,
            "range": "± 2120689",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58273574,
            "range": "± 463696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258319250,
            "range": "± 1133875",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14556143,
            "range": "± 1030313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4527596,
            "range": "± 112242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 472488,
            "range": "± 4887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20464158,
            "range": "± 217367",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 393190,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8393319,
            "range": "± 63463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8828946,
            "range": "± 64719",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 125394,
            "range": "± 1399",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5059,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 84184,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 223619,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 35453,
            "range": "± 2161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2550,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 40761,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1720908775,
            "range": "± 7498564",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1176416,
            "range": "± 14124",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1711708718,
            "range": "± 4502761",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1236199,
            "range": "± 15211",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1102865,
            "range": "± 8047",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3394,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1114714,
            "range": "± 25154",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 27099,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 314,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2810,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 554,
            "range": "± 11",
            "unit": "ns/iter"
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
        "date": 1698437481376,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3015119,
            "range": "± 61838",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 376,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 292,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2995952,
            "range": "± 68013",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1830342,
            "range": "± 41757",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18745523,
            "range": "± 388674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134600529,
            "range": "± 1369445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173376693,
            "range": "± 1093487",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324537113,
            "range": "± 2052864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208816310,
            "range": "± 2080005",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61739162,
            "range": "± 811826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 276539452,
            "range": "± 1541263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14572264,
            "range": "± 95691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4479047,
            "range": "± 89921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 486166,
            "range": "± 11482",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20663755,
            "range": "± 147895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 419902,
            "range": "± 7564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7992234,
            "range": "± 183702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8477004,
            "range": "± 225156",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 130608,
            "range": "± 3082",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5230,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 87132,
            "range": "± 5605",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 233291,
            "range": "± 5291",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37547,
            "range": "± 7332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2675,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42088,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1819043779,
            "range": "± 5302718",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1247657,
            "range": "± 24207",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1848543159,
            "range": "± 6935853",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1322951,
            "range": "± 19438",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1189416,
            "range": "± 17408",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3582,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1163804,
            "range": "± 26545",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 28429,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 31,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 323,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 107,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2908,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 586,
            "range": "± 33",
            "unit": "ns/iter"
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
          "id": "c0521eee4176992c487c9683ff4eb6709b5880cf",
          "message": "Optionally (by default) download & build stripped arrow as part of rerun_sdk  (#4051)\n\n### What\r\n\r\n* Fixes  #4028\r\n\r\nConfirmed to be working on Linux, Mac and Windows. On windows also made\r\nsure this works with debug runtime and experimented a bit with Visual\r\nStudio setups. Also checked Windows against the external sample, see\r\nhttps://github.com/rerun-io/cpp-example-opencv-eigen/pull/8\r\n\r\nMade improvements to our CMakeLists files overall. Notably we no longer\r\nneed `DOWNLOAD_EXTRACT_TIMESTAMP ON` to suppress warnings - idea from\r\nhttps://github.com/rerun-io/cpp-example-opencv-eigen/pull/6, setting a\r\nrange for the cmake version fixes it\r\n\r\n\r\nDrawbacks:\r\n* LOTS of cmake log spam during build\r\n* a bit longer builds on the first run, seems to be a bit more\r\npronounced on Windows (no hard numbers available yet)\r\n\r\nAdvantages:\r\n* no longer needed to install libarrow\r\n* works on Windows debug builds (note that other libraries like OpenCV\r\nmight still have this issue)\r\n* stable against all c++ library/compiler changes, no fear of weird\r\nruntime errors because of stdlib mismatches\r\n* more lightweight artifacts - on Windows one would have needed to ship\r\na large number of dlls, now none\r\n\r\nIt's still worth considering if we should ship prebuilt debug & release\r\narrow dlls instead.\r\n\r\nTODO: We need to document this new behavior and how to turn it off in\r\nthe respective doc pages. By default the user no longer needs to install\r\nlibArrow with this.\r\n\r\nImportant CMake options that need documenting (can partially copy& paste\r\nthis!):\r\n* `RERUN_ARROW_LINK_SHARED`\r\n* exited before but now it's default OFF (EDIT:) on windows. This makes\r\nit easier to relocate windows executable (don't need to copy Arrow.dll\r\naround!). EDIT: On mac this made the address sanitizer crazy for me and\r\nI reckon it's an unnecessary slowdown\r\n* `RERUN_ARROW_EXTERNAL_PROJECT` (new!)\r\n    * Default on\r\n* If enabled we download Arrow 10.0.1 and build it in a as small as\r\npossible fashion\r\n    * If disabled we run `find_package` == old behavior\r\n* `RERUN_C_LIB`\r\n   * where to find the static c library that rerun_sdk links against\r\n   * in repo defaults to cargo built\r\n   * outside repo defaults to /lib/ folder + platform artifact name\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-10-29T19:40:48+01:00",
          "tree_id": "6137d931d23d6aaae47c2994da39ff65e549c65c",
          "url": "https://github.com/rerun-io/rerun/commit/c0521eee4176992c487c9683ff4eb6709b5880cf"
        },
        "date": 1698605699987,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3059192,
            "range": "± 12698",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 381,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 293,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3089524,
            "range": "± 11802",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1885884,
            "range": "± 12006",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19379924,
            "range": "± 480175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133075869,
            "range": "± 1158020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173332328,
            "range": "± 934826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323647011,
            "range": "± 3228287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 207078600,
            "range": "± 1253729",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61248610,
            "range": "± 1519032",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 274908710,
            "range": "± 3267620",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14813528,
            "range": "± 92939",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4471508,
            "range": "± 39163",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 484064,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20729331,
            "range": "± 746374",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 407118,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8222038,
            "range": "± 41705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8667306,
            "range": "± 41375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136718,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5240,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90033,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238414,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38566,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2546,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43451,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1804461032,
            "range": "± 6552990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1286504,
            "range": "± 9846",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1825991088,
            "range": "± 3514374",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1362046,
            "range": "± 6449",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1208657,
            "range": "± 77514",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3628,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1219703,
            "range": "± 18825",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29713,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3084,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 611,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1698608997946,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3068965,
            "range": "± 5222",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 388,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3125020,
            "range": "± 5733",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1888725,
            "range": "± 7097",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18777614,
            "range": "± 385843",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132948747,
            "range": "± 1302657",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173072552,
            "range": "± 654076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324644639,
            "range": "± 1101771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208864483,
            "range": "± 581376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60926576,
            "range": "± 375567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 277329096,
            "range": "± 1400667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14194062,
            "range": "± 39580",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4461270,
            "range": "± 14153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 484072,
            "range": "± 5627",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20378475,
            "range": "± 113446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 409065,
            "range": "± 8863",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8248979,
            "range": "± 16062",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8695194,
            "range": "± 12915",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136492,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5207,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89668,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239532,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38741,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2569,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43198,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1805255405,
            "range": "± 5488235",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1266989,
            "range": "± 10421",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1842184057,
            "range": "± 2912078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1336363,
            "range": "± 4625",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1194786,
            "range": "± 11016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3628,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1192914,
            "range": "± 14157",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29135,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 329,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2988,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 600,
            "range": "± 1",
            "unit": "ns/iter"
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
          "id": "651678d2393fe9c8020cd8d09aef3ced06f287e1",
          "message": "Lint app ids (#4046)\n\n### What\r\nAll our examples should use `rerun_example_` as the prefix for the app\r\nids. We detect this specially in analytics.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4046) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4046)\r\n- [Docs\r\npreview](https://rerun.io/preview/9b72a92d7d9acc6c77388bf7ab86dc3bab8bda94/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/9b72a92d7d9acc6c77388bf7ab86dc3bab8bda94/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-10-30T02:10:54+01:00",
          "tree_id": "daa1f615cf4811151d49dd91d3e13ac3bddc795a",
          "url": "https://github.com/rerun-io/rerun/commit/651678d2393fe9c8020cd8d09aef3ced06f287e1"
        },
        "date": 1698629121443,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3066906,
            "range": "± 6056",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 386,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 429,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3053500,
            "range": "± 5748",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1884780,
            "range": "± 24541",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20102477,
            "range": "± 627124",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135948343,
            "range": "± 2816601",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 174521101,
            "range": "± 1544140",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 333880237,
            "range": "± 1277760",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 211366701,
            "range": "± 1652104",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63985839,
            "range": "± 1288748",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 281633063,
            "range": "± 2223540",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14502715,
            "range": "± 846855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4541045,
            "range": "± 14684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 481373,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20813937,
            "range": "± 232735",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 422050,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8234794,
            "range": "± 11458",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8660603,
            "range": "± 15824",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135921,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5245,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89713,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239266,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37773,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2666,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42302,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1822216455,
            "range": "± 4497953",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1275316,
            "range": "± 19717",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1850364235,
            "range": "± 4937848",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1355076,
            "range": "± 4648",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1190948,
            "range": "± 20024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3633,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1191788,
            "range": "± 3508",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29231,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 339,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3059,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 594,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}