export default {
  "entity": {
    "id": "4e910a36-c4b0-435f-8b9e-8fed9f965cd2",
    "name": "广州红旗派的兴亡 人民文革丛书卷二",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘国凯",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/4e910a36-c4b0-435f-8b9e-8fed9f965cd2.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "广州红旗派的兴亡 人民文革丛书卷二",
        "authors": [
          "刘国凯"
        ],
        "page_start": 1,
        "page_end": 99,
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
  "path": "4e910a36-c4b0-435f-8b9e-8fed9f965cd2.pdf",
  "resource_type": "book",
  "version": 2
}