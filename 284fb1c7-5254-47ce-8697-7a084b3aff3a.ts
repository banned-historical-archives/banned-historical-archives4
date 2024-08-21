export default {
  "entity": {
    "id": "284fb1c7-5254-47ce-8697-7a084b3aff3a",
    "name": "红卫兵小报主编自述",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "周孜仁",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/284fb1c7-5254-47ce-8697-7a084b3aff3a.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "红卫兵小报主编自述",
        "authors": [
          "周孜仁"
        ],
        "page_start": 3,
        "page_end": 356,
        "dates": [
          {
            "year": 2024,
            "month": 6
          }
        ]
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
  "path": "284fb1c7-5254-47ce-8697-7a084b3aff3a.pdf",
  "resource_type": "book",
  "version": 2
}