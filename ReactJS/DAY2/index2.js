// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threesum(a){

    a.sort(function(a, b){return a - b});

  
    let flag = false;

  
    for (let i = 0; i < a.length - 2; i++)
    {
        if (i == 0 || a[i] > a[i - 1])
        {
           
            let j = i + 1;

          
            let k = a.length - 1;

         
            let target = 0 - a[i];

            while (j < k)
            {
               
                if (j > i + 1
                    && a[j] == a[j - 1])
                {
                    j++;
                    continue;
                }    
                if (k < a.length - 1
                    && a[k] == a[k + 1])
                {
                    k--;
                    continue;
                }
                if (target == a[j] + a[k])
                {
                    document.write("[" + a[i]
                         + "," + a[j]
                         + "," + a[k] + "] ");
                    flag = true;
                    j++;
                    k--;
                }        
                else if (target > (a[j] + a[k]))
                {
                    j++;
                }
                else {
                    k--;
                }
            }
        }
    }
    if (flag == false) {
        document.write("[]");
    }
}

console.log(threesum([-1,0]))
// threesum([-1,0,1,2,-1,-4])