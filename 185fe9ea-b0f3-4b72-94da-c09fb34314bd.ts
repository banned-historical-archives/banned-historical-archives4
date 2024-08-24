export default {
  "entity": {
    "id": "185fe9ea-b0f3-4b72-94da-c09fb34314bd",
    "name": "周恩来传（二）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/185fe9ea-b0f3-4b72-94da-c09fb34314bd.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "周恩来传（二）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 439,
        "page_end": 869,
        "dates": [
          {
            "year": 2011,
            "month": 1
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
  "path": "185fe9ea-b0f3-4b72-94da-c09fb34314bd.pdf",
  "resource_type": "book",
  "version": 2
}