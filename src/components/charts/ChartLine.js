export function getDataLine(values, text, data, color ) {
    const dataLine = {
        labels: values,
        datasets: [
            {
                label: text,
                data: data,
                borderColor: [color],
                backgroundColor: [color],
                pointBackgroundColor: color,
                pointBorderColor: color,
            }
        ] 
   }

   return dataLine;
}

export function getOptionsLine() {
    const optionsLine = {
        title: {
            display: true,
            text: 'COVID-19 IN 2020/2022 '
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear'
            }],
       }
   }

   return optionsLine;
}
