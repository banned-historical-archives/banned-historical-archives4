export default {
  "entity": {
    "id": "4c2851f4-3e28-43cd-81fb-ba13aedc3a3d",
    "name": "风起莲月",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "冯敬兰",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/4c2851f4-3e28-43cd-81fb-ba13aedc3a3d.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "风起莲月",
        "authors": [
          "冯敬兰"
        ],
        "page_start": 9,
        "page_end": 327,
        "dates": [
          {
            "year": 2023,
            "month": 2
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
  "path": "4c2851f4-3e28-43cd-81fb-ba13aedc3a3d.pdf",
  "resource_type": "book",
  "version": 2
}