 const selectDescricao = document.getElementById('descricao');
        const inputOutros = document.getElementById('descricao-outros');

        selectDescricao.addEventListener('change', function () {
            if (this.value === 'Outros') {
                inputOutros.style.display = 'block';
                inputOutros.required = true;
            } else {
                inputOutros.style.display = 'none';
                inputOutros.required = false;
            }
        });