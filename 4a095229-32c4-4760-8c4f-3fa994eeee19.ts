export default {
  "entity": {
    "id": "4a095229-32c4-4760-8c4f-3fa994eeee19",
    "name": "文革史话 第六部 整顿治理",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/4a095229-32c4-4760-8c4f-3fa994eeee19.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第六部 整顿治理",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 9,
        "page_end": 873,
        "dates": [
          {
            "year": 2021
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
  "path": "4a095229-32c4-4760-8c4f-3fa994eeee19.pdf",
  "resource_type": "book",
  "version": 2
}