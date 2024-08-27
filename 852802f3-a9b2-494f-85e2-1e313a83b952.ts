export default {
  "entity": {
    "id": "852802f3-a9b2-494f-85e2-1e313a83b952",
    "name": "毛泽东年谱（第八卷）（1961_7-1966_9）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/852802f3-a9b2-494f-85e2-1e313a83b952.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第八卷）（1961_7-1966_9）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 637,
        "dates": [
          {
            "year": 2023,
            "month": 12
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": false,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "852802f3-a9b2-494f-85e2-1e313a83b952.pdf",
  "resource_type": "book",
  "version": 2
}