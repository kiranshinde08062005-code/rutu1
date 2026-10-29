function calculate(){
            let bamt = Number(document.getElementById("bamt").value);
            let quantity = Number(document.getElementById("qamt").value);
            let Gstper = Number(document.getElementById("Gpamt").value);

            let amount = bamt * quantity;
            document.getElementById("aamt").value = amount;

            let gstamt = amount * Gstper / 100;
            document.getElementById("Gamt").value = gstamt;

            let famount = amount + gstamt;
            document.getElementById("Famt").value = famount;

            console.log("final amount:" + famount);
        }