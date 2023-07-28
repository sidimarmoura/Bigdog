    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                // Exibe uma mensagem de sucesso
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                // Exibe uma mensagem de erro
                alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
            }
        } catch (error) {
            // Exibe uma mensagem de erro em caso de falha na requisição
            alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
        }
    });

