export default {
  "entity": {
    "id": "503c1dad-1168-490d-8cc6-dd3cf6bccdbf",
    "name": "陈伯达遗稿——狱中自述及其他",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "陈伯达",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/503c1dad-1168-490d-8cc6-dd3cf6bccdbf.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "陈伯达遗稿——狱中自述及其他",
        "authors": [
          "陈伯达"
        ],
        "page_start": 4,
        "page_end": 365,
        "dates": [
          {
            "year": 1995,
            "month": 5
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
  "path": "503c1dad-1168-490d-8cc6-dd3cf6bccdbf.pdf",
  "resource_type": "book",
  "version": 2
}