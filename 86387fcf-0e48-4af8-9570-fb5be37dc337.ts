export default {
  "entity": {
    "id": "86387fcf-0e48-4af8-9570-fb5be37dc337",
    "name": "“梁效”顾问冯友兰",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "郭罗基",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/86387fcf-0e48-4af8-9570-fb5be37dc337.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "“梁效”顾问冯友兰",
        "authors": [
          "郭罗基"
        ],
        "page_start": 5,
        "page_end": 442,
        "dates": [
          {
            "year": 2020,
            "month": 3
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
  "path": "86387fcf-0e48-4af8-9570-fb5be37dc337.pdf",
  "resource_type": "book",
  "version": 2
}