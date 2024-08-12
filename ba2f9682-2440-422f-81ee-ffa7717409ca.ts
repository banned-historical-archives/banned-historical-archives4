export default {
  "entity": {
    "id": "ba2f9682-2440-422f-81ee-ffa7717409ca",
    "name": "文革史话 第一部 山雨欲来",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/ba2f9682-2440-422f-81ee-ffa7717409ca.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第一部 山雨欲来",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 4,
        "page_end": 781,
        "ocr": {
          "extract_text_from_pdf": true,
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": [
          {
            "year": 2016
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
  "path": "ba2f9682-2440-422f-81ee-ffa7717409ca.pdf",
  "resource_type": "book",
  "version": 2
}