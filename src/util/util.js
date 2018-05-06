/**
 * @Author: Dingjia
 * @Date:   2018-05-04T23:31:53+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-05-04T23:41:23+08:00
 */



class Util {
  constructor(text) {
    this.text = text
  }

  showTip() {
    this.$message({
      message: this.text,
      type: 'warning'
    });
  }
}

export default Util
