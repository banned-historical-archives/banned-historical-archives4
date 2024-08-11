export default {
  "entity": {
    "id": "b19fec51-6ace-4d81-8d85-b2d64d5b72e5",
    "name": "文革史话 第二部 狂风骤雨",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/b19fec51-6ace-4d81-8d85-b2d64d5b72e5.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第二部 狂风骤雨",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 5,
        "page_end": 2840,
        "ocr": {
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
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "b19fec51-6ace-4d81-8d85-b2d64d5b72e5.pdf",
  "resource_type": "book",
  "version": 2
}