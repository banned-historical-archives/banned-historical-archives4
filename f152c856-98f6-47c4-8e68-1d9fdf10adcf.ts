export default {
  "entity": {
    "id": "f152c856-98f6-47c4-8e68-1d9fdf10adcf",
    "name": "文革史话 第三部 全面内战",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/f152c856-98f6-47c4-8e68-1d9fdf10adcf.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第三部 全面内战",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 5,
        "page_end": 7291,
        "ocr": {
          "extract_text_from_pdf": true,
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": [
          {
            "year": 2016
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
  "path": "f152c856-98f6-47c4-8e68-1d9fdf10adcf.pdf",
  "resource_type": "book",
  "version": 2
}