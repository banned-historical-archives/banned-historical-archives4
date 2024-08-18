export default {
  "entity": {
    "id": "0af23b2f-069d-4813-8901-141d5d27b28f",
    "name": "在大漠那边：亲历林彪坠机事件和中蒙关系波折——一个前驻蒙外交官的回忆",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "孙一先",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0af23b2f-069d-4813-8901-141d5d27b28f.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "在大漠那边：亲历林彪坠机事件和中蒙关系波折——一个前驻蒙外交官的回忆",
        "authors": [
          "孙一先"
        ],
        "page_start": 2,
        "page_end": 384,
        "dates": [
          {
            "year": 2000
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
  "path": "0af23b2f-069d-4813-8901-141d5d27b28f.pdf",
  "resource_type": "book",
  "version": 2
}