<script>
import { Doughnut} from "vue-chartjs";

export default {
  extends: Doughnut,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    // this.gradient.addColorStop(0, "rgb(241, 180, 76)");
    // this.gradient.addColorStop(0.5, "rgb(241, 180, 76)");
    // this.gradient.addColorStop(1, "rgb(241, 180, 76)");

    // this.gradient2.addColorStop(0, "rgb(85, 110, 230)");
    // this.gradient2.addColorStop(0.5, "rgb(85, 110, 230)");
    // this.gradient2.addColorStop(1, "rgb(85, 110, 230)");

	//  this.gradient2.addColorStop(0, "rgb(52, 195, 143)");
    // this.gradient2.addColorStop(0.5, "rgb(52, 195, 143)");
    // this.gradient2.addColorStop(1, "rgb(52, 195, 143)");

	//  this.gradient2.addColorStop(0, "rgb(244, 106, 106)");
    // this.gradient2.addColorStop(0.5, "rgb(244, 106, 106)");
    // this.gradient2.addColorStop(1, "rgb(244, 106, 106)");
    this.renderChart(
      {
        labels: ["Đơn mới", "Đang giao", "Thành công","Bị hủy"],
        datasets: [
          {
            backgroundColor: ["rgb(241, 180, 76)", "rgb(85, 110, 230)", "rgb(52, 195, 143)","rgb(244, 106, 106)"],
            data: [10, 20, 10,40]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>