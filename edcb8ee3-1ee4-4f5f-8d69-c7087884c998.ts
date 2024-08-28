export default {
  "entity": {
    "id": "edcb8ee3-1ee4-4f5f-8d69-c7087884c998",
    "name": "人民文革论 人民文革丛书卷四",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘国凯",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/edcb8ee3-1ee4-4f5f-8d69-c7087884c998.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "人民文革论 人民文革丛书卷四",
        "authors": [
          "刘国凯"
        ],
        "page_start": 1,
        "page_end": 112,
        "dates": []
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
  "path": "edcb8ee3-1ee4-4f5f-8d69-c7087884c998.pdf",
  "resource_type": "book",
  "version": 2
}