export default {
  "entity": {
    "id": "b30e5264-122f-4d27-944c-11abc14ed4ca",
    "name": "文革史话 第七部 大幕落下",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/b30e5264-122f-4d27-944c-11abc14ed4ca.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第七部 大幕落下",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 7,
        "page_end": 626,
        "dates": [
          {
            "year": 2021
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
  "path": "b30e5264-122f-4d27-944c-11abc14ed4ca.pdf",
  "resource_type": "book",
  "version": 2
}