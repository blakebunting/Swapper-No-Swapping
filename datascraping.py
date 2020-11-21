# importing url calling library
import requests 
#importing beautiful soup that parses hmtl
from bs4 import BeautifulSoup

#Get content to parse
URL = 'https://www.monster.com/jobs/search/?q=Software-Developer&where=Australia'
page = requests.get(URL)

#creating beautiful soup with html to parse easier
soup = BeautifulSoup(page.content, 'html.parser')
#finding all of the 'paragraph' tags
ptag = soup.findAll('p')
#prints the number of p tags
print(len(ptag))
#stores the first p tag
fptag = ptag[0]
#prints the first ptags content
print (fptag.contents)

