export default {
  "entity": {
    "id": "a76714be-f89e-4295-9e9c-15e4b198a004",
    "name": "张耀祠回忆录——在毛主席身边的日子",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "张耀祠",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/a76714be-f89e-4295-9e9c-15e4b198a004.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "张耀祠回忆录——在毛主席身边的日子",
        "authors": [
          "张耀祠"
        ],
        "page_start": 5,
        "page_end": 240,
        "dates": [
          {
            "year": 2012,
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
  "path": "a76714be-f89e-4295-9e9c-15e4b198a004.pdf",
  "resource_type": "book",
  "version": 2
}