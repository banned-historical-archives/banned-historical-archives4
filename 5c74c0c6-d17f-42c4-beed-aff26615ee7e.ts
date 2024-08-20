export default {
  "entity": {
    "id": "5c74c0c6-d17f-42c4-beed-aff26615ee7e",
    "name": "毛家湾纪实",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "张云生",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/5c74c0c6-d17f-42c4-beed-aff26615ee7e.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛家湾纪实",
        "authors": [
          "张云生"
        ],
        "page_start": 9,
        "page_end": 438,
        "dates": [
          {
            "year": 1988,
            "month": 5,
            "day": 13
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
  "path": "5c74c0c6-d17f-42c4-beed-aff26615ee7e.pdf",
  "resource_type": "book",
  "version": 2
}