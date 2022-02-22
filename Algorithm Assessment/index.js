function smallestInt(A) {
  
    // If max value in A is negative, just return 1. 
      if(Math.max(...A) <= 0) {
        return 1;
      }
   
     // Sorted list with positive integer numbers only.
       let sorted = A.filter(x => x >= 1).sort((a, b) => a - b)
   
     // list of pair of integer with the difference between two numbers are bigger than 2.
     for(let i = 0; i< sorted.length - 1; i++) {
       let diff = sorted[i+1] - sorted[i]
   
       if (diff >= 2) {
         // if there is a gap then return A + 1
         return sorted[i] + 1
       }
     }
     // if not then just return max(sorted numbers) + 1
     return Math.max(...sorted) + 1
   }
   
   function runTests() {
     console.clear();
     
     // print results to console
     
     // Testing
     
     var A = [1, 3, 6, 4, 1, 2];
     console.log(smallestInt(A));
     
     var A = [1, 2, 3];
     console.log(smallestInt(A));
     
     var A = [-1, -3];
     console.log(smallestInt(A));
     
     var A = [100000, 500, 10];
     console.log(smallestInt(A));
     
     var A = [-5, -10, -2, 0];
     console.log(smallestInt(A));
     
     var A = [-266959, -559850, 667410, -370471, -695927, 170911, 658702, -737673, 370182, -285767];
     console.log(smallestInt(A));
     
     var A = [860108, 591722, -969778, -439377, -511718,
    -207087, -457298, 908118, 311622, 519103, -975605, -157567,
    -318617, -634176, 264219, -82032, -277682, -364746, -788141,
    584287];
     console.log(smallestInt(A));
     
   }
   
   function runBenchmark() {
     console.clear();
     
     // print result to console
     var A = [860108, 591722, -969778, -439377, -511718,
    -207087, -457298, 908118, 311622, 519103, -975605, -157567,
    -318617, -634176, 264219, -82032, -277682, -364746, -788141,
    584287];
     
     const test = (A) => {
       var start = new Date()
       
       return {
         stop: function() {
           var end  = new Date();
               var time = end.getTime() - start.getTime();
               console.log('Timer:', name, 'finished in', time, 'ms');
         }
       }
     }
     
     var time = test(A);
     time.stop()
   }