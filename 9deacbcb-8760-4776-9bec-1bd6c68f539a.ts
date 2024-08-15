export default {
  "entity": {
    "id": "9deacbcb-8760-4776-9bec-1bd6c68f539a",
    "name": "吴德口述：十年风雨纪事——我在北京工作的一些经历",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "吴德",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/9deacbcb-8760-4776-9bec-1bd6c68f539a.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "吴德口述：十年风雨纪事——我在北京工作的一些经历",
        "authors": [
          "吴德"
        ],
        "page_start": 4,
        "page_end": 289,
        "dates": [
          {
            "year": 2004,
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
  "path": "9deacbcb-8760-4776-9bec-1bd6c68f539a.pdf",
  "resource_type": "book",
  "version": 2
}