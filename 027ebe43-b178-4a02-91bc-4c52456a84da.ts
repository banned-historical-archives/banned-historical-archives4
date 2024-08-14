export default {
  "entity": {
    "id": "027ebe43-b178-4a02-91bc-4c52456a84da",
    "name": "文革史话 第五部 折戟沉沙",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "刘朝驹",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/027ebe43-b178-4a02-91bc-4c52456a84da.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革史话 第五部 折戟沉沙",
        "authors": [
          "刘朝驹"
        ],
        "page_start": 9,
        "page_end": 886,
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
  "path": "027ebe43-b178-4a02-91bc-4c52456a84da.pdf",
  "resource_type": "book",
  "version": 2
}