export default {
  "entity": {
    "id": "bd9ef1bb-7b58-4293-b233-96854a1d13a4",
    "name": "真相——专机副驾驶亲历“九一三”",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "康庭梓",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/bd9ef1bb-7b58-4293-b233-96854a1d13a4.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "真相——专机副驾驶亲历“九一三”",
        "authors": [
          "康庭梓"
        ],
        "page_start": 11,
        "page_end": 387,
        "dates": [
          {
            "year": 2013,
            "month": 7
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
  "path": "bd9ef1bb-7b58-4293-b233-96854a1d13a4.pdf",
  "resource_type": "book",
  "version": 2
}