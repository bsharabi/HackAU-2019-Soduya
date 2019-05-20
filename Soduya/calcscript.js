// JavaScript source code
    var i = false;  // משתנה True // false
        var pm = true; // משתנה לסימן שלילי
        var k;        //משתנה לפונקצית מספרים
        var s;       // משתנה לפעולות חשבון בפונקציה
        //פונקציה לכתוב מספרים ב  IN
        function number_in(k) {
            document.getElementById('id44').style.display = 'none';
            if ((calculator.answer.value) == '0' || (calculator.answer.value) == ('לא ניתן לחלק באפס') || (calculator.answer.value) == ('המחשבון מכיל עד כ - 39 תווים') || (calculator.answer.value) == ('המחשבון מכיל עד כ - 39 תווי')) {
                calculator.answer.value = '';
                calculator.answer.value += k;
                // responsiveVoice.speak("" +k);
                i = true;
            }
            else
                calculator.answer.value += k;
            //responsiveVoice.speak("" +k);
            i = true;
            dev_range();
        }
        //פונקציה למחיקת תו
        function clean_char() {
            pm = true;
            calculator.answer.value = calculator.answer.value.substr(0, calculator.answer.value.length - 1);
            if (calculator.answer.value.length == 0 || (calculator.answer.value) == ('לא ניתן לחלק באפ') || (calculator.answer.value) == ('המחשבון מכיל עד כ - 39 תווי')) {
                calculator.answer.value = '0';
            }
            if (i == false) {
                pm = i = true;
            }
            else
                if (i == true || j == true) {
                    pm = i = j = false;
                }
            dev_range();
        }
        //כפתור סימן שלילי
        function minus_click() {
            if (pm == true && (calculator.answer.value.length) == 1 && calculator.answer.value != 1 && calculator.answer.value != 2 && calculator.answer.value != 3 && calculator.answer.value != 4 && calculator.answer.value != 5 && calculator.answer.value != 6 && calculator.answer.value != 7 && calculator.answer.value != 8 && calculator.answer.value != 9) {
        calculator.answer.value = '';
    calculator.answer.value += '-';
            }
            pm = false;
        }
        //Arithmetic
        function Arithmetic(s) {
            if ((calculator.answer.value) == ('לא ניתן לחלק באפס') || (calculator.answer.value) == ('המחשבון מכיל עד כ - 39 תווים')) {
                calculator.answer.value = '0';
            }
            else {
                if (i == true)
                    calculator.answer.value += s;
                i = false;
                responsiveVoice.speak("" + s);
                dev_range();
            }
        }
        // פונקצית כפל אפס
        function multiplication_zero() {
            if ((calculator.answer.value) == '0') {
                calculator.answer.value = '0'; i = j = true;
            }
            else
                calculator.answer.value += '0'; i = j = true;
        }
        // פונקצית חלוקה באפס וחישוב המספר
        function div_zero() {
            if (eval(calculator.answer.value) == "Infinity") {
                calculator.answer.value = '';
                calculator.answer.value = 'לא ניתן לחלק באפס';
                responsiveVoice.speak('Error');
                audio1(98);
            }
            else
                calculator.answer.value = eval(calculator.answer.value);
            responsiveVoice.speak("" + eval(calculator.answer.value));
        }
        //חריגה מהשדה
        function dev_range() {
            if ((calculator.answer.value.length) >= 39) {
                calculator.answer.value = "המחשבון מכיל עד כ - 39 תווים";
                document.getElementById("TEXT").style.fontSize = "45px";

            }
            else
                if ((calculator.answer.value.length) >= 28) {
                    document.getElementById("TEXT").style.fontSize = "25px";
                }
                else
                    if ((calculator.answer.value.length) >= 22) {
                        document.getElementById("TEXT").style.fontSize = "35px";

                    }
                    else
                        if ((calculator.answer.value.length) >= 16) {
                            document.getElementById("TEXT").style.fontSize = "45px";

                        }
                        else {
                            document.getElementById("TEXT").style.fontSize = "60px";
                        }
        }
        //פונקציה נקודה עשרונית
        function decimal_point() {
            if (i == true)
                calculator.answer.value += '.';
            responsiveVoice.speak('.');
            i = false;
        }
        //פונקצית דיבוב
        function audio1(k) {
            var audio = new Audio(k + ".ogg");
            audio.oncanplaythrough = function () {
                audio.play();
            }
            audio.loop = false;
        }

   
