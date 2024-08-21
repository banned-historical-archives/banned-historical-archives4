export default {
  "entity": {
    "id": "3a1912a8-719f-4115-9929-66a1b816d19c",
    "name": "清华大学文革纪事——一个红卫兵领袖的自述",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "沈如槐",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/3a1912a8-719f-4115-9929-66a1b816d19c.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "清华大学文革纪事——一个红卫兵领袖的自述",
        "authors": [
          "沈如槐"
        ],
        "page_start": 10,
        "page_end": 439,
        "dates": [
          {
            "year": 2004,
            "month": 10
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
  "path": "3a1912a8-719f-4115-9929-66a1b816d19c.pdf",
  "resource_type": "book",
  "version": 2
}