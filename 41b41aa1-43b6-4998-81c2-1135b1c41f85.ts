export default {
  "entity": {
    "id": "41b41aa1-43b6-4998-81c2-1135b1c41f85",
    "name": "基层文革泥泞路 人民文革丛书卷三",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘国凯",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/41b41aa1-43b6-4998-81c2-1135b1c41f85.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "基层文革泥泞路 人民文革丛书卷三",
        "authors": [
          "刘国凯"
        ],
        "page_start": 1,
        "page_end": 106,
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
  "path": "41b41aa1-43b6-4998-81c2-1135b1c41f85.pdf",
  "resource_type": "book",
  "version": 2
}