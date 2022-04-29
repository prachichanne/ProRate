

from textblob import TextBlob
#1 is more positive, 0 is neutral, -1 is more negative
#review = input("Enter The Review")

review="good product"
res = TextBlob(review).sentiment
res.polarity
oldMax=1
oldMin=-1
newMax=5
newMin=0
oldRange = oldMax - oldMin
newRange = newMax - newMin
oldValue = res.polarity
newValue = ((oldValue - oldMin) * newRange / oldRange) + newMin
print(newValue)