from flask import Flask,request
import sys
sys.path.append("/home/severus/Desktop/Network Security/ns-app/DES-python")
from DEA import DES_M; 
app=Flask(__name__)
block_size = 64
rounds = 16
secret_key = "secret_k"
seed = 7
msg = "hello wo"
msg2 = "eello wo"
@app.route('/api',methods=['POST'])
def api():
	dic=request.get_json()
	print(dic,'hello',dic['text'])
	rounds=int(dic['round'])
	secret_key=dic['key']
	msg=dic['text']
	block_size=int(dic['bsize'])
	des_o = DES_M(block_size,rounds,secret_key,seed,0)
	cypher , cypher_dash = des_o.encrypt(msg)
	return {
		'userId':1,
		'title': 'Flask',
		'completed':False,
		'code': cypher
	}
