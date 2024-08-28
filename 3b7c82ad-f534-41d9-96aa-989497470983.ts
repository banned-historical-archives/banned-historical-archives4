export default {
  "entity": {
    "id": "3b7c82ad-f534-41d9-96aa-989497470983",
    "name": "文化革命简析 人民文革丛书卷一",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘国凯",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/3b7c82ad-f534-41d9-96aa-989497470983.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文化革命简析 人民文革丛书卷一",
        "authors": [
          "刘国凯"
        ],
        "page_start": 1,
        "page_end": 88,
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
  "path": "3b7c82ad-f534-41d9-96aa-989497470983.pdf",
  "resource_type": "book",
  "version": 2
}