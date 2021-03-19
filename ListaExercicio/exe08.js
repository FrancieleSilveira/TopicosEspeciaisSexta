/*Desenvolver um algoritmo para receber 1000 valores dentro de um vetor
e ordenar do menor para o maior. 
a)	Desenvolver o algoritmo de ordenação na mão;
b)	Utilizar uma função JavaScript para ordenar;
*/

let n = 10;
let numeros[] = 
		int numeros[] = new int[n];
		Scanner teclado = new Scanner(System.in);
		
		//recebendo valores	
		for (int i = 0; i < n; i++) {
			System.out.printf("Informe o n�mero %d/%d: ", i + 1, n);
			numeros[i] = teclado.nextInt();
		}
		System.out.println();
		for (int i = 0; i < n; i++) {
			System.out.printf("[%d] ", numeros[i]);
		}
		
		//ordenando
		int cont = 0, aux;
		int pronto = n;
		
		do {
			pronto--;
			for(int i = 0; i < pronto; i++) {
				if(numeros[i] > numeros[i + 1]) {
					aux = numeros[i];
					numeros[i] = numeros[i + 1];
					numeros[i + 1] = aux;	
					cont++;	
				}
			}
		} while (pronto != 0);
		
		//sa�da
		System.out.println("\n\nN�meros ordenados:");
		
		for(int i = 0; i < n; i++){
			System.out.printf("[%d] ", numeros[i]);	
		}
		System.out.printf("\n\nNumero de trocas = %d", cont);
		
		teclado.close();
	}
}