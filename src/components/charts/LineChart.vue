<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  	props:
	{
		chart:{
			default:() =>{},
			

		}
	},
		watch: {
		chart(newVal, oldVal){
			console.log(newVal, oldVal)
			 this.loadData()
		},

	},
	mounted(){
		this.loadData()
	},
  methods: {
	  loadData(){
		  let pending = this.chart.pending === undefined? []: this.chart.pending;
		  let pending1 = pending.replaceAll(',' , '').split('').map(pending => Number(pending))

		    let shipping = this.chart.shipping === undefined? []: this.chart.shipping;
		  let shipping1 = shipping.replaceAll(',' , '').split('').map(shipping => Number(shipping))

		    let fail = this.chart.fail === undefined? []: this.chart.fail;
		  let fail1 = fail.replaceAll(',' , '').split('').map(fail => Number(fail))

		    let success = this.chart.success === undefined? []: this.chart.success;
		  let a = success.replaceAll(',' , '').split('').map(success => Number(success))
		   
		
		    this.renderChart(
      {
        labels: [
          "1",
		  "2",
		  "3",
		  "4",
		  "5",
		  "6",
		  "7",
		  "8",
		  "9",
		  "10",
		  "11",
		  "12"
       
        ],
        datasets: [
          {
            label: "Đơn mới",
            data: pending1,
            backgroundColor: "transparent",
            borderColor: "rgb(241, 180, 76)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Đang giao",
            data: shipping1,
            backgroundColor: "transparent",
            borderColor: "rgb(85, 110, 230)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Bị hủy",
            data: fail1,
            backgroundColor: "transparent",
            borderColor: "rgb(244, 106, 106)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          },
		         {
            label: "Thành công",
            data: a,
            backgroundColor: "transparent",
            borderColor: "rgb(52, 195, 143)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    );
	  }

  }
};
</script>