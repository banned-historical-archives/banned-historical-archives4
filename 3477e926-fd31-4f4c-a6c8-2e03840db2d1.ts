export default {
  "entity": {
    "id": "3477e926-fd31-4f4c-a6c8-2e03840db2d1",
    "name": "北京大学文革史榷（下）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "胡宗式 章铎",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/3477e926-fd31-4f4c-a6c8-2e03840db2d1.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "北京大学文革史榷（下）",
        "authors": [
          "胡宗式",
          "章铎"
        ],
        "page_start": 9,
        "page_end": 536,
        "dates": [
          {
            "year": 2022,
            "month": 12
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": true,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "3477e926-fd31-4f4c-a6c8-2e03840db2d1.pdf",
  "resource_type": "book",
  "version": 2
}