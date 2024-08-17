export default {
  "entity": {
    "id": "2a5001b5-bc42-441b-9bf9-1f088e61db22",
    "name": "“文革”前后时期的陈伯达秘书的证言",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "王文耀 王保春",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/2a5001b5-bc42-441b-9bf9-1f088e61db22.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "“文革”前后时期的陈伯达秘书的证言",
        "authors": [
          "王文耀",
          "王保春"
        ],
        "page_start": 13,
        "page_end": 337,
        "dates": [
          {
            "year": 2014,
            "month": 6
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
  "path": "2a5001b5-bc42-441b-9bf9-1f088e61db22.pdf",
  "resource_type": "book",
  "version": 2
}